import { JogadorListaComponent } from './../jogador-lista/jogador-lista.component';
import { JogadorService } from './jogador.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  public jogador = [];    
  @Input() id = 0;
  public atributoText;
  
  public posicao = [{
    posicao: 'Goleiro',
    atributo1: 'Posicionamento',
    atributo2: 'Def. Penaltis',
    atributo3: 'Reflexos',
    atributo4: 'Liderança',
    atributo5: 'Agilidade',
    atributo6: 'Elasticidade'
  },

  {
    posicao: 'Defensor',
    atributo1: 'Posicionamento',
    atributo2: 'Força',
    atributo3: 'Velocidade',
    atributo4: 'Cabeceio',
    atributo5: 'Passe',
    atributo6: 'Desarme'
  },

  {
    posicao: 'Meio-Campista',
    atributo1: 'Posicionamento',
    atributo2: 'Drible',
    atributo3: 'Velocidade',
    atributo4: 'Finalização',
    atributo5: 'Passe',
    atributo6: 'Desarme'
  },

  {
    posicao: 'Atacante',
    atributo1: 'Posicionamento',
    atributo2: 'Drible',
    atributo3: 'Velocidade',
    atributo4: 'Finalização',
    atributo5: 'Cabeceio',
    atributo6: 'Agilidade'
  },
]

  constructor(private _jogadorService: JogadorService) { }

  ngOnInit() {
    this.atributoText = this.posicao[this.id];
    this.jogador = this._jogadorService.getJogador();        
    //console.log(this.jogador);   
    
    JogadorListaComponent.emitirPlayerID.subscribe(
      playerId => {
        this.atributoText = this.posicao[playerId];
      }
    );
  }
}
