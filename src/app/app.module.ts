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

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
