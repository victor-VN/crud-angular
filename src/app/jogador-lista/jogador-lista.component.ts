import { JogadorService } from './../jogador/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador-lista',
  templateUrl: './jogador-lista.component.html',
  styleUrls: ['./jogador-lista.component.css']
})
export class JogadorListaComponent implements OnInit {

  jogadores = [];

  constructor(private _jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadores = this._jogadorService.getJogador();
    console.log(this.jogadores);
  }

}
