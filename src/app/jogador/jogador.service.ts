import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  static emitirJogador = new EventEmitter<any>();
  
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

  editarJogador(id, newInfo){   
    
    var jogadorJSON, jogadorObj, jogadorText;
    jogadorText = localStorage.getItem("jogadoresSaveJSON");
    jogadorObj = JSON.parse(jogadorText);
    
    jogadorObj.jogadores[id].nome = newInfo.nome;
    jogadorObj.jogadores[id].idade = newInfo.idade;
    jogadorObj.jogadores[id].nacionalidade = newInfo.nacionalidade;

    JogadorService.emitirJogador.emit(jogadorObj.jogadores);
    
    jogadorJSON = JSON.stringify(jogadorObj);
    localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
    
  }

  removerJogador(playerId)
  {
    var jogadorJSON, jogadorObj, jogadorText;
    jogadorText = localStorage.getItem("jogadoresSaveJSON");
    jogadorObj = JSON.parse(jogadorText);    
        
    jogadorObj.jogadores[playerId].status = "desativado";
    
    jogadorJSON = JSON.stringify(jogadorObj);
    localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
  }

  getJogador(){
    
    var jogadorText, jogadorObj;
    jogadorText = localStorage.getItem("jogadoresSaveJSON");
    jogadorObj = JSON.parse(jogadorText);

    //return this.jogador;
    return jogadorObj.jogadores;
  }
}
