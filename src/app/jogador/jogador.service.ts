import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  
  private jogador = [];

  constructor() { }

  

  setJogador(novoJogador){
    this.jogador.push(novoJogador);
    //console.log(this.jogador);
    var jogadorJSON, jogadorObj, jogadorText;

    jogadorText = localStorage.getItem("jogadoresSaveJSON");
    jogadorObj = JSON.parse(jogadorText);

    

    if(jogadorObj == null){
      jogadorObj = {jogadores: this.jogador};
      jogadorJSON = JSON.stringify(jogadorObj);
      localStorage.setItem("jogadoresSaveJSON", jogadorJSON);  
    } else {

      jogadorObj.jogadores.push(novoJogador)
      console.log(jogadorObj.jogadores);
      jogadorJSON = JSON.stringify(jogadorObj);
      localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
    }
    //jogadorObj = {jogadores: this.jogador};
    //jogadorJSON = JSON.stringify(jogadorObj);
    //localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
  }

  getJogador(){
    
    var jogadorText, jogadorObj;
    jogadorText = localStorage.getItem("jogadoresSaveJSON");
    jogadorObj = JSON.parse(jogadorText);

    //return this.jogador;
    return jogadorObj.jogadores;
  }
}
