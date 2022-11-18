import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Colectivo } from 'src/app/domain/flota/Colectivo';

const ELEMENT_DATA: Colectivo[] = [
  { nroColectivo: "01", patente: 'WS-JS-33', dueno: 'Dixon', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "02", patente: 'YR-DT-24', dueno: 'Taylor', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "03", patente: 'YH-DR-77', dueno: 'Wilson', marca: 'NISSAN', modelo: "toyota" },
  { nroColectivo: "04", patente: 'RT-DF-56', dueno: 'Leon', marca: 'NISSAN', modelo: "toyota" },
  { nroColectivo: "05", patente: 'CF-FY-34', dueno: 'Smith', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "06", patente: 'TS-WY-89', dueno: 'Monroe', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "07", patente: 'WS-LJ-57', dueno: 'Meza', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "08", patente: 'QX-GH-67', dueno: 'Patton', marca: 'TOYOTA', modelo: "toyota" },
  { nroColectivo: "09", patente: 'FL-XY-53', dueno: 'Jackson', marca: '', modelo: "toyota" },
  { nroColectivo: "10", patente: 'MN-ZR-86', dueno: 'Lee', marca: 'TOYOTA', modelo: "toyota" },
];
@Component({
  selector: 'app-admin-flota',
  templateUrl: './admin-flota.component.html',
  styleUrls: ['./admin-flota.component.css']
})

export class AdminFlotaComponent implements OnInit {

  constructor() { }


  displayedColumns: string[] = ['nroColectivo', 'patente', 'dueno', 'marca', 'modelo', 'accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit(): void {
  }
  crearColectivo() {

  }

}
