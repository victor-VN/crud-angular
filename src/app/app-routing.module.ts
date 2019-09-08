import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { JogadorCriarComponent } from './jogador-criar/jogador-criar.component';
import { JogadorComponent } from './jogador/jogador.component';


const routes: Routes = [
  {path: 'jogador', component: JogadorComponent},
  {path: 'criar-jogador', component: JogadorCriarComponent},
  {path: '', component: JogadorCriarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
