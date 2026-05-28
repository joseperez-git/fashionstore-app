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

  enviarFormulario(form: any) {

    if (!this.nombre || !this.correo || !this.mensaje) {
      alert('Por favor, complete todos los campos obligatorios');
      return;
    }

    this.enviado = true;

    console.log({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

    form.reset();

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }

}