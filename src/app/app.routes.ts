import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaBaralhoComponent } from './lista-baralho/lista-baralho.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lista-baralho', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'lista-baralho', component: ListaBaralhoComponent, data: { text: 'Lista de baralhos' } }
];
