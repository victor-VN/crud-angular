import { JogadorService } from './../jogador/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador-lista',
  templateUrl: './jogador-lista.component.html',
  styleUrls: ['./jogador-lista.component.css']
})
export class JogadorListaComponent implements OnInit {

  jogadores = [];  
  playerID = 0;

  constructor(private _jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadores = this._jogadorService.getJogador();
    JogadorService.emitirJogador.subscribe(
      novoJogador => this.jogadores = novoJogador
    );

    console.log(this.jogadores);

    var select = document.getElementById("anoNascimento");

    for(let i = 2003; i >= 1950; i--){
      var option = document.createElement("option");
      option.value = i.toString();
      option.text = i.toString();
      select.appendChild(option);
    }

  }

  playerInfo(player)
  {    
    this.playerID = (parseInt((<HTMLInputElement>player).firstChild.textContent, 10) - 1);
    //console.log(this.playerID);
    var card = document.getElementById("card-jogador");    
    card.style.animation = 'none';
    card.offsetHeight; /* trigger reflow */
    card.style.animation = null; 
  }

  editarJogador(nm, age, nac){    
    //console.log(nm + " " + age + " " + nac);
    //this.jogadores[this.playerID].nome = nm;
    //this.jogadores[this.playerID].idade = age;
    //this.jogadores[this.playerID].nacionalidade = nac;
    var newInfo = {
      nome: nm,
      idade: 2019 - age,
      nacionalidade: nac
    }

    this._jogadorService.editarJogador(this.playerID, newInfo);
  }

  removerJogador(player){    
    var id = (parseInt((<HTMLInputElement>player).firstChild.textContent, 10) - 1);    
    this.jogadores[id].status = "desativado";
  }

}
