import { Injectable } from '@angular/core';
import { BackendIntegratorService } from './services/backend-integrator.service';
import { SwapiService } from './services/swapi.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public char: any = {};
  public shipsIds = [];
  public planet: any = {};


  constructor(public swapiService: SwapiService) { }

  async initialize(id): Promise<any> {
    this.char = {};
    this.shipsIds = [];
    this.planet = {};

    this.char = await this.swapiService.getCharById(id);
    const planetParts = this.char.homeworld.split('/');
    const planetId = planetParts[planetParts.length - 2];
    this.planet = await this.swapiService.getPlanetById(planetId);
    this.shipsIds = this.getShipsIdsFromChar(this.char);
  }

  getShipsIdsFromChar(char: any) {
    if (!char.starships) {
      return [];
    }
    const shipsIds = [];
    char.starships.forEach(starshipUrl => {
      const shipsParts = starshipUrl.split('/');
      shipsIds.push(shipsParts[shipsParts.length -2]);
    });
    return shipsIds;
  }
}
