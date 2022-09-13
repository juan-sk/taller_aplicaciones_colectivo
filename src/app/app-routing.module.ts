import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContabilizadorComponent } from './components/colectivero/contabilizador/contabilizador.component';
import { LoginComponent } from './components/login/login.component';
import { MapaPasajeroComponent } from './components/pasajero/mapa-pasajero/mapa-pasajero.component';

const routes: Routes = [
  { path: "", component: MapaPasajeroComponent },
  { path: "login", component: LoginComponent },
  { path: "colectivo", component: ContabilizadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
