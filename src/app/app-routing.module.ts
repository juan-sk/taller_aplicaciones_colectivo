import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContabilizadorComponent } from './components/colectivero/contabilizador/contabilizador.component';
import { LoginComponent } from './components/login/login.component';
import { MapaPasajeroComponent } from './components/pasajero/mapa-pasajero/mapa-pasajero.component';
import { DashboardComponent } from './components/supervisor/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: MapaPasajeroComponent },
  { path: "login", component: LoginComponent },
  { path: "colectivo", component: ContabilizadorComponent, canActivate: [AuthGuard] },
  { path: "garita", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
