import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.interface';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent {
  constructor(
    private router: ActivatedRoute,
    private service: PokedexService
  ) {}

  pokemon!: Pokemon;

  pokemonId!: number;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.pokemonId = parseInt(params['pokemonId']);
    });
    this.getPokemonByIdFromService(this.pokemonId);
  }

  getPokemonByIdFromService(pokemonId: number) {
    this.service.getPokemonByIdFromApi(pokemonId).subscribe((data) => {
      this.pokemon = data;
    });
  }
}
