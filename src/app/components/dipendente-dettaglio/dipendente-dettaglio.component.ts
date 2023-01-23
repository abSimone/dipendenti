import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Dipendente from 'src/app/models/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-dipendente-dettaglio',
  templateUrl: './dipendente-dettaglio.component.html',
  styleUrls: ['./dipendente-dettaglio.component.css'],
})
export class DipendenteDettaglioComponent implements OnInit {
  dipendente!: Dipendente;
  indice: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private dipendenteService: DipendenteService
  ) {}

  ngOnInit(): void {
    // mi sottoscrivo a eventuali cambi di valore del parametro indice della Route
    this.activatedRoute.params.subscribe((params : Params) => {
      this.dipendente = this.dipendenteService.getDipendenteByIdx(params['indice'])
    });

    // Prende il valore corrente del parametro indice al caricamento del compoenent
    // non viene rieseguito se il component è gia caricato in pagina perché lo eseguiamo all'interno di ngOnInit()
    // this.dipendente = this.dipendenteService.getDipendenteByIdx(this.activatedRoute.snapshot.params['indice'])
  }
}
