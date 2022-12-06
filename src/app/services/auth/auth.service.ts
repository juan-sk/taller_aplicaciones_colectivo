import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/domain/login/LoginResponse';
import { environment } from 'src/environments/environment';
import { Utils } from '../Utils'
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/domain/objetos/usuario/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.api.login;
  tokenKey = "token"
  perfilkey = "perfilKey"
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken() {

    let token = localStorage.getItem(this.tokenKey);
    if (token) {

      return token
    } else {
      return undefined
    }
  }
  setPerfil(perfil: Usuario) {
    let perfilString = JSON.stringify(perfil)
    localStorage.setItem(this.perfilkey, perfilString);
  }
  getPerfil(): Usuario {
    let perfilString = localStorage.getItem(this.perfilkey);
    if (perfilString) {

      return JSON.parse(perfilString) as Usuario;

    } else {
      return new Usuario()
    }
  }

  login(payload: any): Observable<LoginResponse> {
    // let payloadBasic = Utils.basicAuthPayloadGenerator(payload.user, payload.pass);
    // let basicAuthHeader = `Basic ${payloadBasic}`
    return this.http.post<LoginResponse>(this.baseUrl, payload);

  }
}
