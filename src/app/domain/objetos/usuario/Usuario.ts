export class Usuario {

    rut: string = ""
    nombre: string = ""
    apellido: string = ""
    password: string = ""
    movil: number = 0
    tipoUsuario: number = 0

    /**
     *
     */
    constructor() {


    }
    static fromForm(form: any): Usuario {
        let u: Usuario = new Usuario();

        u.rut = form.rut;
        u.nombre = form.nombre;
        u.apellido = form.apellido
        u.password = form.password;
        u.movil = form.movil;
        u.tipoUsuario = form.tipoUsuario
        return u

    }
}