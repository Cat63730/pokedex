import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemonsFromApi() {
    return this.http.get<any>(
      'https://pokebuildapi.fr/api/v1/pokemon/limit/10'
    );
  }

  getPokemonByIdFromApi(pokemonId: number): Observable<any> {
    return this.http.get<any>(
      `https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`
    );
  }
}
