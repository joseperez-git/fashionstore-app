import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private router: Router) {}

  irInicio(){
    const usuario = localStorage.getItem('usuario');

    if(usuario){
      this.router.navigate(['/dashboard']);

    }else{
      this.router.navigate(['/login']);
    }
  }  

}


