import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class TiendaComponent implements OnInit {

  abierto: boolean = false;
  horaActual: string = '';

  ngOnInit(): void {

    const ahora = new Date();

    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    const periodo = hora >= 12 ? 'PM' : 'AM';

    this.horaActual =
      `${hora.toString().padStart(2, '0')}:${minutos
        .toString()
        .padStart(2, '0')} ${periodo}`;

    const dia = ahora.getDay();

    if (dia >= 1 && dia <= 5) {

      this.abierto = hora >= 9 && hora < 20;

    } else if (dia === 6) {

      this.abierto = hora >= 10 && hora < 18;

    } else {

      this.abierto = false;

    }

  }

}