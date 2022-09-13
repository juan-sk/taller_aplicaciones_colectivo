import { Marker } from "./Marker";

export class Pasajero extends Marker {


    constructor(pos: google.maps.LatLng) {
        let iconPersona = '../assets/icons/persona.png'
        super(iconPersona, " ");
        this.position = pos;

    }
}