import { Component, OnInit } from '@angular/core';
import { UbicacionColectivo } from 'src/app/domain/objetos/ubicacion/UbicacionColectivo';
import { ColectivoService } from 'src/app/services/colectivo/colectivo.service';

@Component({
  selector: 'app-contabilizador',
  templateUrl: './contabilizador.component.html',
  styleUrls: ['./contabilizador.component.css']
})
export class ContabilizadorComponent implements OnInit {

  constructor(private colectivoService: ColectivoService) { }

  ngOnInit(): void {
    let intervaloEnvio = 10000;
    setInterval(() => {
      let idColectivo = 2;
      let cantidadPasajeros = 3;
      let ubicacion = this.obtenerUbicacionColectivo(idColectivo, cantidadPasajeros);
      this.enviarUbicacion(ubicacion)
    }, intervaloEnvio)
  }

  enviarUbicacion(ubicacion: UbicacionColectivo) {
    this.colectivoService.enviarUbicacion(ubicacion).subscribe({
      next: (v) => {
        console.log(v)
      },
      error: (e) => console.log("ocurrio un error", e),
      complete: () => console.log("completed")
    })
  }

  lon: number = 0;
  lat: number = 0;
  obtenerUbicacionColectivo(idColectivo: number, cantidadPasajeros: number) {
    let ub = new UbicacionColectivo();
    ub.idColectivo = idColectivo;
    ub.cantidadPasajeros = cantidadPasajeros;
    let datos = navigator.geolocation.getCurrentPosition((position) => {

      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    });
    ub.lat = this.lat;
    ub.lon = this.lon;
    // this.enviarUbicacion(ub)
    console.log(datos, ub)
    return ub
  }

}
