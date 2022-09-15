import { MarkerLabel } from "./MarkerLabel";
import { MarkerOptions } from "./MarkerOptions";

export class Marker implements google.maps.Marker {


    position: google.maps.LatLng
    label: google.maps.MarkerLabel
    title: string;
    options: google.maps.MarkerOptions;

    constructor(icon: string, text: any) {
        this.position = new google.maps.LatLng({ lat: 0, lng: 0 })
        this.label = new MarkerLabel(text)
        this.title = ""
        let label = "label test"
        this.options = new MarkerOptions(icon, label);
    }
    getAnimation(): google.maps.Animation | null | undefined {
        throw new Error("Method not implemented.");
    }
    getClickable(): boolean {
        throw new Error("Method not implemented.");
    }
    getCursor(): string | null | undefined {
        throw new Error("Method not implemented.");
    }
    getDraggable(): boolean {
        throw new Error("Method not implemented.");
    }
    getIcon(): string | google.maps.Icon | google.maps.Symbol | null | undefined {
        throw new Error("Method not implemented.");
    }
    getLabel(): string | google.maps.MarkerLabel | null | undefined {
        throw new Error("Method not implemented.");
    }
    getMap(): google.maps.Map | google.maps.StreetViewPanorama | null {
        throw new Error("Method not implemented.");
    }
    getOpacity(): number | null | undefined {
        throw new Error("Method not implemented.");
    }
    getPosition(): google.maps.LatLng | null | undefined {
        throw new Error("Method not implemented.");
    }
    getShape(): google.maps.MarkerShape | null | undefined {
        throw new Error("Method not implemented.");
    }
    getTitle(): string | null | undefined {
        throw new Error("Method not implemented.");
    }
    getVisible(): boolean {
        throw new Error("Method not implemented.");
    }
    getZIndex(): number | null | undefined {
        throw new Error("Method not implemented.");
    }
    setAnimation(animation?: google.maps.Animation | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setClickable(flag: boolean): void {
        throw new Error("Method not implemented.");
    }
    setCursor(cursor?: string | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setDraggable(flag: boolean | null): void {
        throw new Error("Method not implemented.");
    }
    setIcon(icon?: string | google.maps.Icon | google.maps.Symbol | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setLabel(label?: string | google.maps.MarkerLabel | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setMap(map: google.maps.Map | google.maps.StreetViewPanorama | null): void {
        throw new Error("Method not implemented.");
    }
    setOpacity(opacity?: number | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setOptions(options: google.maps.MarkerOptions | null): void {
        throw new Error("Method not implemented.");
    }
    setPosition(latlng?: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setShape(shape?: google.maps.MarkerShape | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setTitle(title?: string | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }
    setZIndex(zIndex?: number | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    addListener(eventName: string, handler: Function): google.maps.MapsEventListener {
        throw new Error("Method not implemented.");
    }
    bindTo(key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined): void {
        throw new Error("Method not implemented.");
    }
    get(key: string) {
        throw new Error("Method not implemented.");
    }
    notify(key: string): void {
        throw new Error("Method not implemented.");
    }
    set(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }
    setValues(values?: object | null | undefined): void {
        throw new Error("Method not implemented.");
    }
    unbind(key: string): void {
        throw new Error("Method not implemented.");
    }
    unbindAll(): void {
        throw new Error("Method not implemented.");
    }
}