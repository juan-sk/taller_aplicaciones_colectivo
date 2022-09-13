import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-pasajero',
  templateUrl: './mapa-pasajero.component.html',
  styleUrls: ['./mapa-pasajero.component.css']
})
export class MapaPasajeroComponent implements OnInit {

  constructor() { }
  markers: any = [{}]
  showMap: boolean = false;
  ngOnInit(): void {
    setInterval(() => {
      if (this.markers.length > 0) {

        this.updateMap()
        this.showMap = true;
      }
    }, 500)
  }

  height = window.screen.height;

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


  updateMap() {
    let colectivosupdateados = this.getColectivos();
    for (let i = 0; i < this.markers.length; i++) {
      let marker = this.markers[i];
      marker = colectivosupdateados[i]
    }
    this.markers = colectivosupdateados;


  }
}
