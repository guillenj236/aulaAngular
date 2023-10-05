import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  constructor(){

    let livro1: Livro = new Livro();
    livro1.autor = "Marcel Proust";
    livro1.titulo = "Em Busca do Tempo Perdido"
   
    let livro2: Livro = new Livro();
    livro2.autor = "James Joyce";
    livro2.titulo = "Ulysses"

    let livro3: Livro = new Livro();
    livro3.autor = "Miguel de Cervantes";
    livro3.titulo = "Dom Quixote"
   
    let livro4: Livro = new Livro();
    livro4.autor = "F. Scott Fitzgerald";
    livro4.titulo = "O Grande Gatsby"

    let livro5: Livro = new Livro();
    livro5.autor = "Gabriel García Márquez";
    livro5.titulo = "Cem Anos de Solidão";

    this.lista.push(livro1)
    this.lista.push(livro2)
    this.lista.push(livro3)
    this.lista.push(livro4)
    this.lista.push(livro5)
  }
}
