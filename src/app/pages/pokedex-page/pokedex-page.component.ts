import { Component, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.interface';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent {
  pokemons: Pokemon[] = [];

  pokemonsSearched: Pokemon[] = [];

  currentpokemon: Pokemon = {
    id: 0,
    name: '',
    image: '',
    description: 'Description du pokemon',
  };

  searchInput: string = '';

  constructor(private service: PokedexService) {}

  ngOnInit() {
    this.getPokemonsFromService();
  }

  onPokemonChange(event: Pokemon) {
    this.currentpokemon = event;
  }

  getPokemonsFromService() {
    this.service.getPokemonsFromApi().subscribe((data) => {
      this.pokemons = data;
      this.pokemonsSearched = data;
    });
  }

  searchPokemon(input: any) {
    this.pokemonsSearched = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    );
  }
}
