import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.api.garita_ubicacion;

  ultimosColectivos(): Observable<any> {
    return this.http.get(this.baseUrl + '/obtener_ultimas_ubicaciones')

  }
  enviarUbicacionColectivo() { }
}
