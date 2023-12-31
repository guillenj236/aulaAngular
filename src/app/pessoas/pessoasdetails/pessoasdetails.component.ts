import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/pessoas/pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  roteador = inject(ActivatedRoute);

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
  pessoa: Pessoa = new Pessoa();

  @Output () retorno = new EventEmitter<Pessoa>();

  salvar(){
    this.retorno.emit(this.pessoa);
  }
}
