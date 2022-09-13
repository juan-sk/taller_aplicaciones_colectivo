export class MarkerOptions implements google.maps.MarkerOptions {

    icon: string
    label: string
    /**
     *
     */
    constructor(icon: string, label: string) {
        this.icon = icon
        this.label = label
    }
}