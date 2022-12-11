
export class Utils {

    static basicAuthPayloadGenerator(user: string, pass: string) {

        let payload: string = `${user}:${pass}`
        let contenidoEnBase64 = btoa(payload)
        return contenidoEnBase64
    }

    static patenteFormater(patente: string) {
        let pat = patente;
        if (patente.length == 6) {
            pat = `${patente[0]}${patente[1]}-${patente[2]}${patente[3]}-${patente[5]}${patente[5]}`
        }
        else if (patente.length >= 8) {
            pat = `${patente[0]}${patente[1]}-${patente[2]}${patente[3]}-${patente[5]}${patente[5]}`

        } else {
            if (patente.length == 2) {
                pat = `${patente[0]}${patente[1]}-`
            } else if (patente.length == 4) {
                pat == `${patente[0]}${patente[1]}-${patente[2]}${patente[3]}-`
            }
        }
        return pat;
    }
} 