import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon { name: string; url: string; }

interface IPokelist { results: IPokemon[]; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {
    this.loadPokemon();
  }

  pokelist: IPokemon[];
  filter: string;

  ngOnInit() {
  }

  async loadPokemon(){
    this.pokelist = (await this.http
      .get<IPokelist>('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .toPromise()).results;
  }
}


