import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  enviarFormulario(form: NgForm) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.enviado = true;

    console.log({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

    form.resetForm();

  }

}