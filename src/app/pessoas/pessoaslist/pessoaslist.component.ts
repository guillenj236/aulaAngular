import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  modalService = inject(NgbModal)

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

    this.lista.push(pessoa1)
    this.lista.push(pessoa2)
    this.lista.push(pessoa3)
    this.lista.push(pessoa4)
    this.lista.push(pessoa5)
  
}
  abreModal(componentModal: any){
    this.modalService.open(componentModal,{size:'lg'});
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }
}
