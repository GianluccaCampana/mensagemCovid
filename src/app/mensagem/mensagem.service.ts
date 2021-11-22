import { Mensagem } from './mensagem.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
//tornando providers
@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor (private httpClient: HttpClient){
  }

  private mensagens: Mensagem[] = [];
  private listaMensagensAtualizada = new Subject<Mensagem[]>();

  getMensagens(): void {
    this.httpClient.get<{mensagem: string, mensagens: Mensagem[]}>('http://localhost:3000/api/mensagens').subscribe(
      (dados) => {
        this.mensagens = dados.mensagens;
        this.listaMensagensAtualizada.next([...this.mensagens])
      }
    )
  }

  adicionarMensagem(men: string){
    const mensagem: Mensagem = {
      mensagem: men,
    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:3000/api/mensagens', mensagem).subscribe(
      (dados) => {
        console.log(dados.mensagem);
        this.mensagens.push(mensagem);
        this.listaMensagensAtualizada.next([...this.mensagens]);
      }
    )
  }

  getListaDeMensagensAtualizadaObservable(){
    return this.listaMensagensAtualizada.asObservable();
  }

}
