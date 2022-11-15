import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelaLoginService {

  getTelaLogin() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ];
  }

  constructor() { }
}
