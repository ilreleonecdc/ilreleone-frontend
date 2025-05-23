export interface IContatto{
  nome: string;
  cognome: string;
  email: string;
  messaggio: string;
}

export class Contatto implements IContatto{
  nome: string;
  cognome: string;
  email: string;
  messaggio: string;

  constructor() {
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.messaggio = '';
  }
}
