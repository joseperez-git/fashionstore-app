import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-micuenta',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './micuenta.html',
  styleUrl: './micuenta.css'
})
export class MicuentaComponent implements OnInit {

  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {

    const datos = localStorage.getItem('usuario');

    if (datos) {
      this.usuario = JSON.parse(datos);
    }

  }

}