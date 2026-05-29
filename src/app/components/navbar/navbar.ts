import { Component, DoCheck } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements DoCheck {

  usuarioLogueado = false;

  ngDoCheck(): void {

    const usuario =
      localStorage.getItem('usuario');

    this.usuarioLogueado = !!usuario;
  }
}


