import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() markers: any;
  @Input() center: any;
  @Input() options: any;
  @Input() polylineOptions = {}
  @Output() mapClick: EventEmitter<any> = new EventEmitter<any>()
  zoom = 18;

  ngOnInit() {


  }
  // creaPath(coords: any) {

  //   this.path.push(new google.maps.LatLng(coords))
  //   this.polylineOptions = {
  //     path: this.path,
  //     strokeColor: '#32a1d0',
  //     strokeOpacity: 1.0,
  //     strokeWeight: 10,
  //   };
  // }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }





  autoPath(event: any) {

    console.log("se agrega otro punto al mapa?  ")
    console.log({ event })
    console.log({ lat: event.latLng.lat(), lng: event.latLng.lng() })
    let coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    // this.creaPath(coords)
    this.mapClick.emit(coords)

  }

}
