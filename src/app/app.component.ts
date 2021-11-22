import { Component } from '@angular/core';

//importe do módulo
import { Mensagem } from './mensagem/mensagem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mensagensCovid';

  mensagens: Mensagem[] = [];
  onMensagemAdicionada(mensagem){
    this.mensagens = [...this.mensagens, mensagem];
  }
}
