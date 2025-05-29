import { v4 as uuidv4 } from 'uuid';
export interface IContatto{
  numeroPratica: string;
  nome: string;
  cognome: string;
  email: string;
  oggettoRichiesta: string;
  messaggio: string;
}

export class Contatto implements IContatto{
  numeroPratica: string;
  nome: string;
  cognome: string;
  email: string;
  oggettoRichiesta: string;
  messaggio: string;

  constructor() {
    // this.numeroPratica = `PR-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${uuidv4().substring(0, 4).toUpperCase()}`;
    this.numeroPratica = '';
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.oggettoRichiesta = '';
    this.messaggio = '';
  }
}
