import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaBaralhoComponent } from './lista-baralho/lista-baralho.component';
import { BaralhoProprioComponent } from './baralho-proprio/baralho-proprio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'lista-baralho', component: ListaBaralhoComponent, data: { text: 'Lista de baralhos' } },
  { path: 'minhas-cartas', component: BaralhoProprioComponent, data: { text: 'Lista de baralhos' } }
];
