import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor() { }


  getInforme1() {
    let contenidoTemporal = [
      {
        nombre: "pepe",
        apellido: "martinez"
      },
      {
        nombre: "pepe2",
        apellido: "martinez2"
      },
      {
        nombre: "pepe3",
        apellido: "martinez3"
      },
    ]
    return contenidoTemporal;
  }
  getInforme2() {
    let contenidoTemporal = [
      {
        nombre: "pepe",
        apellido: "martinez",
        edad: 21
      },
      {
        nombre: "pepe2",
        apellido: "martinez2",
        edad: 23
      },
      {
        nombre: "pepe3",
        apellido: "martinez3",
        edad: 25
      },
    ]
    return contenidoTemporal;
  }


}
