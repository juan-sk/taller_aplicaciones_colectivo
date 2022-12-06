import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruta } from 'src/app/domain/objetos/mapa/path/Ruta';
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
  eliminar(usuario: Usuario) {
    return this.http.delete(this.baseUrl, { params: { rut: usuario.rut } })
  }
  listarUusarios(): Observable<UsuarioList> {
    return this.http.get<UsuarioList>(this.baseUrl)
  }
}
