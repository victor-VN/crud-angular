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

  constructor(private _jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogador = this._jogadorService.getJogador();        
    //console.log(this.jogador);    
  }
}
