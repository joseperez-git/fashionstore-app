import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  correo: string = '';
  password: string = '';

  error: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {

    if (!this.correo || !this.password) {
      this.error = 'Completa todos los campos';
      return;
    }

    if (
      this.correo === 'admin@gmail.com' &&
      this.password === '123456'
    ) {

      localStorage.setItem(
        'usuario',
        JSON.stringify({
          correo: this.correo
        })
      );

      this.router.navigate(['/dashboard']);

    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}


