import { Injectable } from '@angular/core';
import { SwapiService } from './swapi.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {

  public characterList = [];
  public currentPage = 0;
  public routeParams = null;
  public canGoNext = true;

  constructor(
    public swapiService: SwapiService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(async params => {
      this.routeParams = params;
    });
  }

  async fetchResponse(response: any) {
    const json = await response.json();
    this.characterList = json.results;
    this.currentPage = this.swapiService.currentPage;
    this.canGoNext = (json.next);
  }

  async index(page?: number) {
    const response = await this.swapiService.getAll(page);
    this.fetchResponse(response);
  }

  async search(str: string) {
    console.log('ativou search cl service');
    const page = this.routeParams.page || 1;
    this.currentPage = page;
    const response = await this.swapiService.search(str, page);
    this.fetchResponse(response);
  }
}
