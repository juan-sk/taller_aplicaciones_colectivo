import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller_aplicaciones_colectivo';

  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 33.4489,
    lng: 70.6693
  };
  options: google.maps.MapOptions = new Object({
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  });

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  zoomIn() {

    if (this.options != undefined) {

      // if (this.zoom < this.options.maxZoom) {
      this.zoom++;
      // }
    }
  }

  zoomOut() {
    // if (this.zoom > this.options.minZoom) {
    this.zoom--;
    // }
  }

}
