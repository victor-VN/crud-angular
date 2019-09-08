import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  
  private jogador = [];

  constructor() { }

  

  setJogador(novoJogador){
    this.jogador.push(novoJogador);

    
  }

  getJogador(){
    return this.jogador;
  }
}
