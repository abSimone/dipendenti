import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DipendenteAggiungiComponent } from './components/dipendente-aggiungi/dipendente-aggiungi.component';
import { DipendenteListaComponent } from './components/dipendente-lista/dipendente-lista.component';
import { DipendenteDettaglioComponent } from './components/dipendente-dettaglio/dipendente-dettaglio.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200
  { path: 'aggiungi', component: DipendenteAggiungiComponent }, // localhost:4200/aggiungi
  {
    path: 'lista',  // localhost:4200/lista
    component: DipendenteListaComponent,
    children: [
      { path: 'dettaglio/:indice', component: DipendenteDettaglioComponent }, // localhost:4200/lista/dettaglio/1
    ], 
  },
  { path: '**', redirectTo: '' }, // localhost:4200/rimuovi
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DipendenteAggiungiComponent,
    DipendenteListaComponent,
    DipendenteDettaglioComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
