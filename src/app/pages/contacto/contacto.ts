import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviado: boolean = false;

  enviarFormulario() {

    if (
      this.nombre.trim() === '' ||
      this.correo.trim() === '' ||
      this.mensaje.trim() === ''
    ) {
      alert('Complete todos los campos');
      return;
    }

    this.enviado = true;

    console.log({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

  }
}