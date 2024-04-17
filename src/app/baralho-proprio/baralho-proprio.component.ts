import { Component } from '@angular/core';

@Component({
  selector: 'app-baralho-proprio',
  standalone: true,
  imports: [],
  templateUrl: './baralho-proprio.component.html',
  styleUrl: './baralho-proprio.component.css'
})
export class BaralhoProprioComponent {
  constructor() {
    console.log("Entrei no meu deck!")
  }
}
