import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapaPasajeroComponent } from './components/pasajero/mapa-pasajero/mapa-pasajero.component';
import { ContabilizadorComponent } from './components/colectivero/contabilizador/contabilizador.component';
import { DashboardComponent } from './components/supervisor/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonSwitchComponent } from './components/comunes/button-switch/button-switch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/comunes/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InicioComponent } from './components/supervisor/inicio/inicio.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { UsuariosComponent } from './components/supervisor/usuarios/usuarios.component';
import { InformesComponent } from './components/supervisor/informes/informes.component';
import { AdminFlotaComponent } from './components/supervisor/admin-flota/admin-flota.component';
import { VisFlotaComponent } from './components/supervisor/vis-flota/vis-flota.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapaPasajeroComponent,
    ContabilizadorComponent,
    DashboardComponent,
    LoginComponent,
    ButtonSwitchComponent,
    LoadingComponent,
    InicioComponent,
    UsuariosComponent,
    InformesComponent,
    AdminFlotaComponent,
    VisFlotaComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
