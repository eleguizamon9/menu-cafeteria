import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // 1. Contratamos al mensajero oficial
  private http = inject(HttpClient);
  
  // 2. Lista vacía
  productos: any[] = [];

  // 3. Ejecución automática
  ngOnInit() {
    console.log("1. Iniciando petición a Django...");
    
    this.http.get<any>('http://127.0.0.1:8000/menu/')
      .subscribe((respuesta: any) => {
        
        console.log("2. ¡Respuesta recibida!", respuesta);
        
        this.productos = respuesta.menu;
      });
  }
}