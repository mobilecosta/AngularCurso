import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: String = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  valoratual: String;
  valorSalvo: String;
  isMouseOver: Boolean = false;
  nomeDoCurso: string = "Angular";
  valorInicial: Number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botao Clicado");

  };

  onKeyUp(evento: KeyboardEvent) {
    this.valoratual = (<HTMLInputElement>evento.target).value;
  }

  salvaValor(Valor: String) {
    this.valorSalvo = Valor;

  }

  onMouseOverOut() {
    this.isMouseOver = ! this.isMouseOver;
  };

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
