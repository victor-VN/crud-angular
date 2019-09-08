import { JogadorService } from './../jogador/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador-criar',
  templateUrl: './jogador-criar.component.html',
  styleUrls: ['./jogador-criar.component.css']
})
export class JogadorCriarComponent implements OnInit {

  
  public nome;
  public idade;
  public nacionalidade;
  public posicaoid: number = 0;
  public atributos = [50, 50, 50, 50, 50, 50];
  

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

    var select = document.getElementById("anoNascimento");

    for(let i = 2003; i >= 1950; i--){
      var option = document.createElement("option");
      option.value = i.toString();
      option.text = i.toString();
      select.appendChild(option);
    }

  }

  criarJogador(){ 

    var novoJogador = {
      nome: this.nome, 
      idade: (2019 - this.idade), 
      nacionalidade: this.nacionalidade, 
      posicao: this.posicao[this.posicaoid].posicao,      
      atributos: this.atributos
    }

    console.log(novoJogador);
    this._jogadorService.setJogador(novoJogador);

  } 
  
}


