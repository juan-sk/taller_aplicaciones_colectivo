export class MarkerLabel implements google.maps.MarkerLabel {
    className?: string | undefined;
    color?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | undefined;
    fontWeight?: string | undefined;
    text: string;

    /**
     *
     */
    constructor(text: string) {
        this.text = text
        this.color = "black"
    }

}