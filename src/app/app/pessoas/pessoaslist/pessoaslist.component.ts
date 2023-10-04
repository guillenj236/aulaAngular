import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = 'Joao';
    pessoa1.idade = 55;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = 'Marcos';
    pessoa2.idade = 20;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = 'Pedro';
    pessoa3.idade = 30;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = 'Matheus';
    pessoa4.idade = 50;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = 'Thiago';
    pessoa5.idade = 19;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = 'Guilherme';
    pessoa6.idade = 55;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = 'Osmar';
    pessoa7.idade = 60;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = 'Camilo';
    pessoa8.idade = 23;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = 'Joao Paulo';
    pessoa9.idade = 89;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = 'Pedro Henrique';
    pessoa10.idade = 13;

    this.lista.push(pessoa1)
    this.lista.push(pessoa2)
    this.lista.push(pessoa3)
    this.lista.push(pessoa4)
    this.lista.push(pessoa5)
    this.lista.push(pessoa6)
    this.lista.push(pessoa7)
    this.lista.push(pessoa8)
    this.lista.push(pessoa9)
    this.lista.push(pessoa10)
  

}
}
