import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/domain/objetos/usuario/Usuario';
import { UsuarioList } from 'src/app/domain/objetos/usuario/UsuarioList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.api.usuario + "usuario";

  crearUsuario(usuario: Usuario) {
    return this.http.post(this.baseUrl, usuario);
  }
  modificaUsuario(usuario: Usuario) {
    return this.http.put(this.baseUrl, usuario)
  }
  listarUusarios(): Observable<UsuarioList> {
    return this.http.get<UsuarioList>(this.baseUrl)
  }
}
