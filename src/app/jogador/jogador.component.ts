import { JogadorService } from './jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  public jogador = [];

  constructor(private _jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogador = this._jogadorService.getJogador();
    console.log(this.jogador);
  }

}
