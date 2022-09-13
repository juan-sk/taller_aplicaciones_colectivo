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

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapaPasajeroComponent,
    ContabilizadorComponent,
    DashboardComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
