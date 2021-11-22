import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

//importe do módulo
//import { Mensagem } from '../mensagem.model';

//importe service
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-inserir-mensagem',
  templateUrl: './inserir-mensagem.component.html',
  styleUrls: ['./inserir-mensagem.component.css'],
})
export class InserirMensagemComponent implements OnInit {


  constructor(public mensagemService: MensagemService) {}

  ngOnInit(): void {}

  onAdicionarMensagem(form: NgForm) {
    if (form.invalid) {
      //caso mensagem não atenda requisitos necessário
      return;
    }
    this.mensagemService.adicionarMensagem(
      form.value.mensagem
    );
    form.resetForm();

  }
}
