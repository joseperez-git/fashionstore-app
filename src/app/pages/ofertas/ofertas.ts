import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class OfertasComponent implements OnInit {

  productosOferta: any[] = [];

  constructor(
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {

    this.listarOfertas();
  }

  listarOfertas(){

    this.productosService
      .obtenerProductos()
      .subscribe((data: any[]) => {

        this.productosOferta =
          data.filter(
            producto => producto.oferta === true
          );
      });
  }

  calcularDescuento(
    precio: number,
    descuento: number
  ): number {

    return precio - (
      precio * descuento / 100
    );
  }
}


