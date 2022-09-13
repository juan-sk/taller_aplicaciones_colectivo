import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: any = [{}]
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // this.creaPath()
      console.log(this.center)
    });
    setInterval(() => {
      if (this.markers.length > 0) {

        this.updateMap()
      }
    }, 500)
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





  autoPath(event: any) {

    console.log("se agrega otro punto al mapa?  ")
    console.log({ event })
    console.log({ lat: event.latLng.lat(), lng: event.latLng.lng() })
    let coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    this.creaPath(coords)
    // this.markers.push({
    //   position: {
    //     lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
    //     lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
    //   },
    //   label: {
    //     color: 'red',
    //     text: 'Marker label ' + (this.markers.length + 1),
    //   },
    //   title: 'Marker title ' + (this.markers.length + 1),

    //   options: {
    //     // animation: google.maps.Animation.DROP,
    //     icon: '../assets/icons/colectivo.png'
    //   },
    // });
  }

  updateMap() {
    let colectivosupdateados = this.getColectivos();
    for (let i = 0; i < this.markers.length; i++) {
      let marker = this.markers[i];
      marker = colectivosupdateados[i]
    }
    this.markers = colectivosupdateados;


  }

  offset: number = 1;
  getColectivos() {
    let listaBase = [
      {
        position: { lat: -33.51583, lng: -70.5673618 },
        label: {
          color: 'red',
          text: 'Marker label ' + (this.markers.length + 1),
        },
        title: 'Marker title ' + (this.markers.length + 1),

        options: {
          // animation: google.maps.Animation.DROP,
          icon: '../assets/icons/colectivo.png'
        },
      }
    ]

    let constante = 0.00001
    let newLIst = listaBase.map((e) => {

      e.position.lng = e.position.lng - (constante * this.offset);
      return e
    })
    this.offset++;


    return newLIst;
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log({ event })
  }
}
