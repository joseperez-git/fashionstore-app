import { Component } from '@angular/core';

import {
  Router,
  RouterLink
} from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) {}

  estaLogueado(): boolean {

    return !!localStorage.getItem('usuario');
  }

  irInicio(){

    if(this.estaLogueado()){

      this.router.navigate(['/dashboard']);

    }else{

      this.router.navigate(['/login']);
    }
  }
}


