import { Component, OnInit } from '@angular/core';
import { Colectivo } from 'src/app/domain/objetos/mapa/marker/Colectivo';
import { Pasajero } from 'src/app/domain/objetos/mapa/marker/Pasajero';
import { Ruta } from 'src/app/domain/objetos/mapa/path/Ruta';
import { Stroke } from 'src/app/domain/objetos/mapa/path/Stroke';

@Component({
  selector: 'app-mapa-pasajero',
  templateUrl: './mapa-pasajero.component.html',
  styleUrls: ['./mapa-pasajero.component.css']
})
export class MapaPasajeroComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  options: google.maps.MapOptions = new Object({
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 150,
    minZoom: 8,
  });
  markers: any = [{}]


  path: Stroke[] = [
    new google.maps.LatLng({ lat: -33.485649027120154, lng: -70.61909642872637 }),
    new google.maps.LatLng({ lat: -33.485386548820195, lng: -70.62024799049071 }),
    new google.maps.LatLng({ lat: -33.48504055369318, lng: -70.62211993933033 }),
    new google.maps.LatLng({ lat: -33.484282938602234, lng: -70.62505929805808 }),
    new google.maps.LatLng({ lat: -33.48549989196277, lng: -70.62561004500309 }),
    new google.maps.LatLng({ lat: -33.48637680353911, lng: -70.62267034384091 }),
    new google.maps.LatLng({ lat: -33.48724076959144, lng: -70.61962366104126 }),
    new google.maps.LatLng({ lat: -33.48759969279578, lng: -70.61864345376704 }),
    new google.maps.LatLng({ lat: -33.487289497995135, lng: -70.6187435896794 }),
    new google.maps.LatLng({ lat: -33.48709264314169, lng: -70.61847179239008 }),
    new google.maps.LatLng({ lat: -33.48632311533041, lng: -70.61870782678339 }),
    new google.maps.LatLng({ lat: -33.48601291623059, lng: -70.61824291077242 }),
    new google.maps.LatLng({ lat: -33.485500377240236, lng: -70.61624944210052 }),
    new google.maps.LatLng({ lat: -33.4853743388174, lng: -70.61451977694254 }),
    new google.maps.LatLng({ lat: -33.48527617397893, lng: -70.61304463407826 }),
    new google.maps.LatLng({ lat: -33.48636784087708, lng: -70.61235798857045 }),
    new google.maps.LatLng({ lat: -33.48784956716931, lng: -70.61212769426095 }),
    new google.maps.LatLng({ lat: -33.49050329419945, lng: -70.61192026998799 }),
    new google.maps.LatLng({ lat: -33.49088505777504, lng: -70.61190596492781 }),
    new google.maps.LatLng({ lat: -33.49097645511663, lng: -70.61286449432373 }),
    new google.maps.LatLng({ lat: -33.491252327174614, lng: -70.61570805285024 }),
    new google.maps.LatLng({ lat: -33.49146548861712, lng: -70.61730279266737 }),
    new google.maps.LatLng({ lat: -33.48765965893075, lng: -70.61827972019825 }),
    new google.maps.LatLng({ lat: -33.48663362713809, lng: -70.61861589042206 })
  ]


  polylineOptions = new Ruta(this.path)
  showMap: boolean = false;

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(this.center)
    });
    setInterval(() => {
      if (this.markers.length > 0) {

        this.updateMap()
        this.showMap = true;
      }
    }, 1000)
  }

  height = window.screen.height;

  offset: number = 0;
  getColectivos(center: any) {
    let simplepos = { lat: center.lat, lng: center.lng }
    let constante = 0.0001


    simplepos.lng = simplepos.lng - (constante * this.offset);


    this.offset++;
    let pos = new google.maps.LatLng(simplepos);
    let colectivo: Colectivo = new Colectivo(pos, "colectivo 1")
    let listaBase = [colectivo]




    return listaBase;
  }
  direccion: boolean = false;
  getColectivos2() {
    // console.log(this.offset)
    if (this.offset == this.path.length) {
      this.direccion = false;
    }

    if (this.offset == 0) {
      this.direccion = true;

    }
    if (this.direccion) {
      this.offset++;

    }
    if (!this.direccion) {
      this.offset--;

    }


    // this.offset++;
    let pos = this.path[this.offset]
    let pos2 = this.path[this.offset + 1]
    let colectivo: Colectivo = new Colectivo(pos, "undefined")
    let colectivo2: Colectivo = new Colectivo(pos2, "colectivo 2")
    let listaBase = [colectivo, colectivo2]




    return listaBase;
  }
  getPerson(center: any) {
    let pos: google.maps.LatLng = new google.maps.LatLng({ lat: center.lat, lng: center.lng })
    let person = new Pasajero(pos)

    return person
  }

  updateMap() {


    // let elementosMapa: google.maps.Marker[] = this.getColectivos(this.center);
    let elementosMapa: google.maps.Marker[] = this.getColectivos2();
    elementosMapa.push(this.getPerson(this.center))
    for (let i = 0; i < this.markers.length; i++) {
      let marker = this.markers[i];
      marker = elementosMapa[i]
    }
    this.markers = elementosMapa;


  }
}
