

export class Colectivo {

    /**
     *
     */
    idColectivo: number = 0;
    movil: number = 0
    patente: string = ""
    dueno: string = ""
    marca: string = ""
    modelo: string = ""

    constructor() {

    }
    static fromForm(form: any, idColectivo: number) {
        let c: Colectivo = new Colectivo();

        c.idColectivo = idColectivo;
        c.movil = form.movil
        c.patente = form.patente;
        c.dueno = form.dueno
        c.marca = form.marca
        c.modelo = form.modelo;


        return c;
    }
}