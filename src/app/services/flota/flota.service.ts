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
  baseUrl = environment.api.garita_colectivo;
  crearColectivo(data: Colectivo): Observable<any> {
    return this.http.post(this.baseUrl, data)
  }
  modificarColectio(data: Colectivo): Observable<any> {
    return this.http.post(this.baseUrl, data)

  }
  eliminarColectivo(data: Colectivo): Observable<any> {
    return this.http.delete(this.baseUrl, { params: { idColectivo: data.idColectivo } })

  }
  listarColectivos(): Observable<any> {
    return this.http.get(this.baseUrl)

  }

}
