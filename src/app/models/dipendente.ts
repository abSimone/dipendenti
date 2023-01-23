export default class Dipendente {
  id : string;
  nome : string;
  cognome : string;
  email : string;
  dataDiNascita : Date;

  constructor(id : string, nome: string, cognome: string, email: string, dataDiNascita : Date){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.dataDiNascita = dataDiNascita;
  }

  public getNomeCompleto() : string {
    return `${this.nome} ${this.cognome}`
  } 
}