import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];

  constructor(
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {

    this.productosService
      .obtenerProductos()
      .subscribe((data) => {

        this.productos = data;
      });
  }
}


