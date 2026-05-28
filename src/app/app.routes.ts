import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProductosComponent } from './pages/productos/productos';
import { OfertasComponent } from './pages/ofertas/ofertas';
import { TiendaComponent } from './pages/tienda/tienda';
import { ContactoComponent } from './pages/contacto/contacto';
import { MicuentaComponent } from './pages/micuenta/micuenta';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: ProductosComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'micuenta', component: MicuentaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '**', component: Notfound }
];



