import { Injectable } from '@angular/core';
import { BackendIntegratorService } from './backend-integrator.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  protected lastUri = '';
  public currentPage = 1;

  constructor(public integrator: BackendIntegratorService) { }

  getAll(page?: number): Promise<any> {
    this.currentPage = page || 1;
    this.lastUri = '/people';
    return this.integrator.get(this.lastUri, (page) ? {page} : null);
  }

  search(search: string, page?: number) {
    this.lastUri = '/people';
    this.currentPage = page || this.currentPage;
    return this.integrator.get(this.lastUri, {search, page: this.currentPage});
  }

  async getCharById(id) {
    try {
      const response = await this.integrator.get('/people/' + id);
      return await response.json();
    } catch (e) {
      throw new Error('Char not found!');
    }
  }

  async getPlanetById(id) {
    try {
      const response = await this.integrator.get('/planets/' + id);
      return await response.json();
    } catch (e) {
      throw new Error('Planet not found!');
    }
  }

  async getStarshipById(id) {
    try {
      const response = await this.integrator.get('/starships/' + id);
      return await response.json();
    } catch (e) {
      throw new Error('Starship not found!');
    }
  }
}
