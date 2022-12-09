import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UbicacionColectivo } from 'src/app/domain/objetos/ubicacion/UbicacionColectivo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {


  constructor(private http: HttpClient) { }
  baseUrl = environment.api.colectivo;

  enviarUbicacion(ubicacion: UbicacionColectivo) {
    return this.http.post(this.baseUrl, ubicacion)
  }

}
