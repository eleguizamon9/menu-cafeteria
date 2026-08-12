import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef); // Herramienta para despertar a Angular
  
  productos: any[] = [];

  ngOnInit() {
    console.log("1. Entrando al componente Menú y pidiendo datos a Django...");

    this.http.get<any>('http://127.0.0.1:8000/menu/')
      .subscribe({
        next: (respuesta: any) => {
          console.log("2. ¡Respuesta exitosa de Django!", respuesta);
          
          // Asignamos los datos
          this.productos = respuesta.menu;
          
          // Obligamos a Angular a repintar la pantalla inmediatamente
          this.cdr.detectChanges(); 
        },
        error: (error) => {
          console.error("3. ¡Error en la petición HTTP!", error);
        }
      });
  }
}