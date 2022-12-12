import { Marker } from "./Marker";
import { MarkerLabel } from "./MarkerLabel";

export class Colectivo extends Marker {

    /**
     *
     */
    constructor(pos: google.maps.LatLng, labelText: any) {
        let iconColectivo = '../assets/icons/auto_front.png';
        super(iconColectivo, labelText);
        this.label.color = "rgb(150,150,150)";
        this.label.fontSize = "30px";
        this.label.fontWeight = "10px"
        this.position = pos;

    }
}