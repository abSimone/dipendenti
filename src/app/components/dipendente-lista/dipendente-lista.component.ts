import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Dipendente from 'src/app/models/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-dipendente-lista',
  templateUrl: './dipendente-lista.component.html',
  styleUrls: ['./dipendente-lista.component.css'],
})
export class DipendenteListaComponent {
  dipendenti: Dipendente[];
  constructor(
    private dipendenteService: DipendenteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dipendenti = this.dipendenteService.getDipendenti();
    console.log('Dipendenti', this.dipendenti);
  }

  aggiornaLista(dipendente: Dipendente) {
    this.dipendenteService.addDipendente(dipendente);
  }

  selezionaDipendente(id: string) {
    this.router.navigate(['dettaglio', id], { relativeTo: this.route });
  }
}
