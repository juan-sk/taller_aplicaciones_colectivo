import { Injectable } from '@angular/core';

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
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve({})
      }, 2000);
    });
  }
}
