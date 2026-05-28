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

  productosFiltrados: any[] = [];

  categoriaSeleccionada: string = 'Todos';

  constructor(
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {

    this.productosService
      .obtenerProductos()
      .subscribe((data: any[]) => {

        this.productos = data;

        this.productosFiltrados = data;
      });
  }

  filtrarCategoria(categoria: string){

    this.categoriaSeleccionada = categoria;

    if(categoria === 'Todos'){

      this.productosFiltrados = this.productos;

    }else{

      this.productosFiltrados = this.productos.filter(
        producto => producto.categoria === categoria
      );
    }
  }
}



