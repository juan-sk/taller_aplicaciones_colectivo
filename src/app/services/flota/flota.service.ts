import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colectivo } from 'src/app/domain/flota/Colectivo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlotaService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.api.flota;
  crearColectivo(data: Colectivo): Observable<any> {
    return this.http.post(this.baseUrl + 'crear', data)
  }
  modificarColectio(data: Colectivo): Observable<any> {
    return this.http.post(this.baseUrl + 'modificar', data)

  }
  eliminarColectivo(data: Colectivo): Observable<any> {
    return this.http.post(this.baseUrl + 'eliminar', data)

  }
  listarColectivos(): Observable<any> {
    return this.http.get(this.baseUrl + 'activity/')

  }
}
