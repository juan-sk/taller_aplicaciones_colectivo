import { Usuario } from "../objetos/usuario/Usuario";

export class LoginResponse {
    token: string = ""
    user: Usuario = new Usuario();
    /**
     *
     */
    constructor() {

    }
}