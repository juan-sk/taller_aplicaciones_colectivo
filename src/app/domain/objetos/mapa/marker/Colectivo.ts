import { Marker } from "./Marker";

export class Colectivo extends Marker {

    /**
     *
     */
    constructor(pos: google.maps.LatLng, labelText: any) {
        let iconColectivo = '../assets/icons/auto_front.png';
        super(iconColectivo, labelText);

        this.position = pos;

    }
}