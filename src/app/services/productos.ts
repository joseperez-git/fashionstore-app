import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //private apiUrl = 'http://localhost:3000/productos';
  private apiUrl = 'https://6a1a262a489e4715751abf81.mockapi.io/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any[]> {

    return this.http.get<any[]>(
      this.apiUrl
    );
  }
}


