import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {

  usuario: any;

  constructor(private router: Router) {}

  ngOnInit(): void {

    const data = localStorage.getItem('usuario');

    if (!data) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = JSON.parse(data);
    }
  }

  cerrarSesion() {

    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }
}


