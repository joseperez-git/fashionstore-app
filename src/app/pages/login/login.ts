import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  correo: string = '';
  password: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if(
      this.correo.trim() === '' || this.password.trim() === ''
    ){
      alert('Complete todos los campos');
      return;
    }

    if (
      this.correo === 'admin@gmail.com' && this.password === '123456'
    ) {
      localStorage.setItem(
        'usuario',
        JSON.stringify({
          nombre: 'Administrador',
          correo: this.correo,
          fecha: new Date()
        })
      );

      this.router.navigate(['/dashboard']);

    } else {
      alert('Credenciales incorrectas');
    }
  }

}


