import { Marker } from "./Marker";

export class Colectivo extends Marker {

    /**
     *
     */
    constructor(pos: google.maps.LatLng, labelText: string) {
        let iconColectivo = '../assets/icons/colectivo.png';
        super(iconColectivo, labelText);

        this.position = pos;

    }
}