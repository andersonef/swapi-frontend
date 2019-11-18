import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendIntegratorService {

  static readonly BASE_URI = 'https://swapi.co/api';

  constructor() { }

  get(url: string, params?: any): Promise<any> {

    if (!params) {
      params = {};
    }
    url += '?';
    console.log('PARAMS =>>> ', params);
    for(const prop in params) {
      url += prop + '=' + params[prop] + '&';
    }
    return fetch(BackendIntegratorService.BASE_URI + url, {
      method: 'GET'
    });
  }
}
