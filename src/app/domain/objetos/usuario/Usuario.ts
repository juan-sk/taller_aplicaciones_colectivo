export class Usuario {
    id: number = 0;
    rut: string = ""
    nombre: string = ""
    apellido: string = ""
    password: string = ""
    movil: number = 0
    tipoUsuario: number = -1

    /**
     *
     */
    constructor() {


    }
    static fromForm(form: any, id: number): Usuario {
        let u: Usuario = new Usuario();
        u.id = id;
        u.rut = form.rut;
        u.nombre = form.nombre;
        u.apellido = form.apellido
        u.password = form.password;
        u.movil = form.movil;
        u.tipoUsuario = form.tipoUsuario
        return u

    }
}