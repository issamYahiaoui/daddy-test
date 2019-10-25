import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import pokemons from './seed.json'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {




  public pokemons = pokemons


  constructor(private http : HttpClient) {
    console.log('Pokemons service is wired !')
  }

}
