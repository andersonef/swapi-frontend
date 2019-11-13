import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendIntegratorService {

  constructor() { }

  get(url: string, params?: any): Promise<any> {

    if (!params) {
      params = {};
    }
    return fetch(url, {
      method: 'GET',
      body: params
    });
  }
}
