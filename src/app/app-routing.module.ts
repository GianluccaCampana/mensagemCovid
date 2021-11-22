import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMensagemComponent } from './mensagem/lista-mensagem/lista-mensagem.component';
import { InserirMensagemComponent } from './mensagem/inserir-mensagem/inserir-mensagem.component';


const routes: Routes = [
  {path:'', component:ListaMensagemComponent}, //rota padrão
  {path: 'criar', component: InserirMensagemComponent  }
];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
