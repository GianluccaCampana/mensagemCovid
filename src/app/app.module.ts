import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InserirMensagemComponent } from './mensagem/inserir-mensagem/inserir-mensagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'

//imports angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './mensagem/cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListaMensagemComponent } from './mensagem/lista-mensagem/lista-mensagem.component';
import { MatExpansionModule } from '@angular/material/expansion';

// Importe da rota
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InserirMensagemComponent,
    CabecalhoComponent,
    ListaMensagemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
