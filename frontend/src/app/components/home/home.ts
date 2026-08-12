import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importante para que el botón funcione

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Registramos el enrutador aquí
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }