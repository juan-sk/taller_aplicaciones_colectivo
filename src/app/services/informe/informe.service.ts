import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformeService {



  constructor(private http: HttpClient) { }
  baseUrl = environment.api.garita_informe;

  getInforme1(): Observable<any> {
    return this.http.get(this.baseUrl + '/viajes_pasajeros')

  }
  // getInforme1() {
  //   let contenidoTemporal = [
  //     {
  //       nombre: "pepe",
  //       apellido: "martinez"
  //     },
  //     {
  //       nombre: "pepe2",
  //       apellido: "martinez2"
  //     },
  //     {
  //       nombre: "pepe3",
  //       apellido: "martinez3"
  //     },
  //   ]
  //   return contenidoTemporal;
  // }
  getInforme2(): Observable<any> {
    return this.http.get(this.baseUrl + '/viajes_pasajeros_por_conductor')

  }


}
