import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() markers: any;
  showMap: boolean = true
  zoom = 18;
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  path: google.maps.LatLng[] = []
  polylineOptions = {}

  // height = window.screen.height;

  options: google.maps.MapOptions = new Object({
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 150,
    minZoom: 8,
  });

  ngOnInit() {
    console.log({ markers: this.markers })
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(this.center)
    });
    // let interval = setInterval(() => {
    //   if (this.markers != undefined) {
    //     console.log(this.markers)
    //     this.showMap = true;
    //   }
    // }, 10)

  }
  creaPath(coords: any) {

    this.path.push(new google.maps.LatLng(coords))
    this.polylineOptions = {
      path: this.path,
      strokeColor: '#32a1d0',
      strokeOpacity: 1.0,
      strokeWeight: 10,
    };
  }

  zoomIn() {

    if (this.options != undefined) {


      this.zoom++;

    }
  }

  zoomOut() {
    this.zoom--;

  }





  autoPath(event: any) {

    console.log("se agrega otro punto al mapa?  ")
    console.log({ event })
    console.log({ lat: event.latLng.lat(), lng: event.latLng.lng() })
    let coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    this.creaPath(coords)

  }



  // @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log({ event })
  }
}
