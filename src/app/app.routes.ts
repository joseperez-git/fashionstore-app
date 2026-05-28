import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProductosComponent } from './pages/productos/productos';
import { Ofertas } from './pages/ofertas/ofertas';
import { Tienda } from './pages/tienda/tienda';
import { Contacto } from './pages/contacto/contacto';
import { Micuenta } from './pages/micuenta/micuenta';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: ProductosComponent },
  { path: 'ofertas', component: Ofertas },
  { path: 'tienda', component: Tienda },
  { path: 'contacto', component: Contacto },
  { path: 'micuenta', component: Micuenta },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '**', component: Notfound }
];



