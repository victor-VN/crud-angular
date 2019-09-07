import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadorComponent } from './jogador/jogador.component';
import { JogadorListaComponent } from './jogador-lista/jogador-lista.component';
import { JogadorCriarComponent } from './jogador-criar/jogador-criar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    JogadorListaComponent,
    JogadorCriarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
