import { Component } from '@angular/core';
import Musica from './models/musica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-app-angular';
  public mensagem: string = 'Olá Mundo!';
  public nome: string = 'Jorge';
  public idade: number = 32;
  public profissao: string = 'DEV Portugol';

  public listaMusicas: Musica[] = new Array<Musica>();

  constructor() {
    this.listaMusicas.push(new Musica("aaaaaa", "Joshua Bassett", "All in Due Time", 140, "Sad Songs In A Hotel Room", "Pop"));
    this.listaMusicas.push(new Musica("aaaaab", "Joshua Bassett", "Lifeline", 230, "Sad Songs In A Hotel Room", "Pop"));
    this.listaMusicas.push(new Musica("aaaaac", "Joshua Bassett", "Smoke Slow", 164, "Sad Songs In A Hotel Room", "Pop"));
    this.listaMusicas.push(new Musica("aaaaad", "Joshua Bassett", "LA", 192, "Sad Songs In A Hotel Room", "Pop"));
    this.listaMusicas.push(new Musica("aaaaae", "Joshua Bassett", "Used To It", 195, "Sad Songs In A Hotel Room", "Pop"));
    this.listaMusicas.push(new Musica("aaaaaf", "Joshua Bassett", "Sad Songs In A Hotel Room", 192, "Sad Songs In A Hotel Room", "Pop"));
  }
}
