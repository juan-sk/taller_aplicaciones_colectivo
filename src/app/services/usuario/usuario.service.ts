import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioList } from 'src/app/domain/objetos/usuario/UsuarioList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.api.usuario + "usuario";

  listarUusarios(): Observable<UsuarioList> {
    return this.http.get<UsuarioList>(this.baseUrl)
  }
}
