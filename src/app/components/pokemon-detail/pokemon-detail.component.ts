import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    image: '',
    description: '',
  };
}
