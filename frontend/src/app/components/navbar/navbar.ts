import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Solo dejamos RouterLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { }