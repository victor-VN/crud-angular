import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadorComponent } from './jogador/jogador.component';
import { JogadorListaComponent } from './jogador-lista/jogador-lista.component';
import { JogadorCriarComponent } from './jogador-criar/jogador-criar.component';


@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    JogadorListaComponent,
    JogadorCriarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
