import { JogadorService } from './../jogador/jogador.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jogador-criar',
  templateUrl: './jogador-criar.component.html',
  styleUrls: ['./jogador-criar.component.css']
})
export class JogadorCriarComponent implements OnInit {

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

  criarJogador(nm, age, nac){      

    if(nm == "" || age == "" || nac == "")
    {
      alert('Preencha os campos obrigatórios');
    }
    else
    {
      var novoJogador = {
        nome: nm, 
        idade: (2019 - age), 
        nacionalidade: nac, 
        posicao: this.posicao[this.posicaoid].posicao,      
        atributos: this.atributos,
        status: "ativado"
      }
      this._jogadorService.setJogador(novoJogador);  
      alert('Novo Jogador criado com sucesso!');       
    }   
  }
  
  validaFormulario()
  {
    var formField = document.getElementsByClassName('valid');
    var feedback = document.getElementsByClassName('feedback');

    for (let i = 0; i <= formField.length; i++)
    {      
      if((<HTMLInputElement>formField[i]).value == ""){
        (<HTMLInputElement>formField[i]).style.borderColor = "red";
        (<HTMLInputElement>feedback[i]).style.color = "red";
        (<HTMLInputElement>feedback[i]).style.fontWeight = "normal";
        feedback[i].innerHTML = "Campo obrigatório *";
      }  
      else{        
        (<HTMLInputElement>formField[i]).style.borderColor = "green";
        (<HTMLInputElement>feedback[i]).style.color = "green";
        (<HTMLInputElement>feedback[i]).style.fontWeight = "normal";
        feedback[i].innerHTML = "Ok!";
      }      
    }
  }

  limparFormulario()
  {
    var formField = document.getElementsByClassName('valid');
    var feedback = document.getElementsByClassName('feedback');       
    
    for(let i = 0; i <= this.atributos.length; i++)
    {
      this.atributos = [50, 50, 50, 50, 50, 50];
  
      console.log(this.atributos[i]);
    }

    for (let i = 0; i <= formField.length; i++)
    {  
      (<HTMLInputElement>formField[i]).value = '';        
      (<HTMLInputElement>formField[i]).style.borderColor = "red";
      (<HTMLInputElement>feedback[i]).style.color = "red";
      (<HTMLInputElement>feedback[i]).style.fontWeight = "normal";      
        feedback[i].innerHTML = "Campo obrigatório *";       
    }    

    
  }
}


