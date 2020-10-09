import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  nome: String = 'abc';
  pessoa: {
    nome: string,
    idade: number
  };

  constructor() {
    this.pessoa = { nome: 'Nome da Pessoa', idade : 41};
  }

  ngOnInit(): void {
  }

}
