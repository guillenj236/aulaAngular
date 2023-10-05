import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){

    let carro1: Carro = new Carro();
    carro1.nome = "Bugatti Centodieci";
    carro1.ano = 2024;

    let carro2: Carro = new Carro();
    carro2.nome = "Bugatti La Voiture Noire";
    carro2.ano = 2023;

    let carro3: Carro = new Carro();
    carro3.nome = "Rolls-Royce Sweptail";
    carro3.ano = 2022;

    let carro4: Carro = new Carro();
    carro4.nome = "Pagani Zonda HP Barchetta";
    carro4.ano = 2020;

    let carro5: Carro = new Carro();
    carro5.nome = "Rolls-Royce Boat Tail";
    carro5.ano = 2020;

    this.lista.push(carro1)
    this.lista.push(carro2)
    this.lista.push(carro3)
    this.lista.push(carro4)
    this.lista.push(carro5)
}
}
