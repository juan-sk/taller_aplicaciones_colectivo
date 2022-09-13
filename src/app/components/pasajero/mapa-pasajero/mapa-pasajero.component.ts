import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-pasajero',
  templateUrl: './mapa-pasajero.component.html',
  styleUrls: ['./mapa-pasajero.component.css']
})
export class MapaPasajeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  height = window.screen.height;
}
