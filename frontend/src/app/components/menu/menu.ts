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
  private cdr = inject(ChangeDetectorRef);

  private readonly URL_API = 'http://127.0.0.1:8000/menu/';

  productos: any[] = [];
  cargando = true;
  fallo = false;

  ngOnInit() {
    this.http.get<any>(this.URL_API).subscribe({
      next: (respuesta: any) => {
        this.productos = respuesta.menu;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error en la petición HTTP', error);
        this.fallo = true;
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}