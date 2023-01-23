import { Injectable } from '@angular/core';
import Dipendente from '../models/dipendente';

@Injectable({
  providedIn: 'root',
})
export class DipendenteService {
  dipendenti: Dipendente[] = [];
  constructor() {
    this.dipendenti.push(
      new Dipendente(
        '1',
        'Mario',
        'Rossi',
        'm.rossi@email.it',
        new Date(660783600000)
      )
    );
    this.dipendenti.push(
      new Dipendente(
        '2',
        'Luigi',
        'Verdi',
        'l.verdi@email.it',
        new Date(580428000000)
      )
    );
  }

  getDipendenti(): Dipendente[] {
    return this.dipendenti;
  }

  addDipendente(dipendente: Dipendente): void {
    this.dipendenti.push(dipendente);
    this.dipendenti[this.dipendenti.length - 1].id =
      this.dipendenti.length + '';
  }

  getDipendenteByIdx(indice: string): Dipendente {
    return this.dipendenti[<number>(<unknown>indice) - 1];
  }
}
