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
    this.numeroPratica = `PR-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${crypto.randomUUID().substring(0, 4).toUpperCase()}`;
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.oggettoRichiesta = '';
    this.messaggio = '';
  }
}
