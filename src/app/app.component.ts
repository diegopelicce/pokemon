import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
    
  constructor(private router: Router) { }
  
  redirectLista() {
    this.router.navigateByUrl('/lista-baralho')
  }

  redirectMinhasCartas() {
    this.router.navigateByUrl('/minhas-cartas')
  }
}
