import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],   // <-- esta línea es la clave
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }   // <-- deja el nombre que YA tenías