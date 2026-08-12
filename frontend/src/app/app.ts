import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // Importamos tu navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Importamos los dos
  template: `
    <app-navbar></app-navbar> <!-- La barra siempre fija arriba -->
    <router-outlet></router-outlet> <!-- Aquí cambiará el contenido (Inicio o Menú) -->
  `
})
export class App {}