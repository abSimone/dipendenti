import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import Dipendente from 'src/app/models/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-dipendente-aggiungi',
  templateUrl: './dipendente-aggiungi.component.html',
  styleUrls: ['./dipendente-aggiungi.component.css'],
})
export class DipendenteAggiungiComponent {
  dipendente: Dipendente;
  dateInput: string = '';
  // @Output() aggiungiDipendente = new EventEmitter<Dipendente>();

  constructor(
    private router: Router,
    private dipendenteService: DipendenteService
  ) {
    this.dipendente = new Dipendente('', '', '', '', new Date());
  }

  aggiungi() {
    this.dipendente.dataDiNascita = new Date(this.dateInput);
    this.dipendenteService.addDipendente(this.dipendente);
    alert("Dipendente inserito correttamente! Verrai reindirizzato alla lista dei dipendenti.");
    this.router.navigate(['lista']); // localhost:4200
  }

  reset() {
    this.dateInput = '';
    this.dipendente = new Dipendente('', '', '', '', new Date());
  }
}
