import { Stroke } from "./Stroke";

export class Ruta implements google.maps.PolylineOptions {

    path: Stroke[];
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;

    /**
     *
     */
    constructor(path: Stroke[]) {
        this.path = path
        this.strokeColor = '#32a1d0'
        this.strokeOpacity = 1.0;
        this.strokeWeight = 10;
    }
}