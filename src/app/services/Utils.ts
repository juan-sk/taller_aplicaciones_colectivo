
export class Utils {

    static basicAuthPayloadGenerator(user: string, pass: string) {

        let payload: string = `${user}:${pass}`
        let contenidoEnBase64 = btoa(payload)
        return contenidoEnBase64
    }
} 