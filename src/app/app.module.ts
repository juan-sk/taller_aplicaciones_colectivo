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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/comunes/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InicioComponent } from './components/supervisor/inicio/inicio.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { UsuariosComponent } from './components/supervisor/usuarios/usuarios.component';
import { InformesComponent } from './components/supervisor/informes/informes.component';
import { AdminFlotaComponent } from './components/supervisor/admin-flota/admin-flota.component';
import { VisFlotaComponent } from './components/supervisor/vis-flota/vis-flota.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CrearComponent } from './components/supervisor/usuarios/crear/crear.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MantFlotaComponent } from './components/supervisor/admin-flota/mant-flota/mant-flota.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ModComponent } from './components/supervisor/usuarios/mod/mod.component';
import { ConfirmarComponent } from './components/comunes/confirmar/confirmar.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModFlotaComponent } from './components/supervisor/admin-flota/mod-flota/mod-flota.component';
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
    CrearComponent,
    MantFlotaComponent,
    ModComponent,
    ConfirmarComponent,
    ModFlotaComponent,

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
    MatDividerModule, MatTableModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [CrearComponent, ModComponent, ConfirmarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
