import { Injectable } from '@angular/core';
import { Utils } from '../Utils'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  tokenKey = "token"
  perfilkey = "perfilKey"
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  setPerfil(perfil: number) {
    localStorage.setItem(this.perfilkey, perfil + "");
  }
  getPerfil() {
    let perfil = localStorage.getItem(this.perfilkey);
    if (perfil) {
      return +perfil

    } else {
      return null
    }
  }

  login(payload: any) {
    let payloadBasic = Utils.basicAuthPayloadGenerator(payload.user, payload.pass);
    let basicAuthHeader = `Basic ${payloadBasic}`
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve({})
      }, 2000);
    });
  }
}
