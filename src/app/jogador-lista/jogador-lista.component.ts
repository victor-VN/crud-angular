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
    console.log(this.jogadores);
  }

  playerInfo(player)
  {    
    this.playerID = (parseInt((<HTMLInputElement>player).firstChild.textContent, 10) - 1);
    console.log(this.playerID)
    var card = document.getElementById("card-jogador");    
    card.style.animation = 'none';
    card.offsetHeight; /* trigger reflow */
    card.style.animation = null; 
  }

}
