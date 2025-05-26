import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contatto } from '../models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattoService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  public sendContatto(contatto: Contatto) {
    return this.httpClient.post('https://httpbin.org/post', contatto);
  }
}
