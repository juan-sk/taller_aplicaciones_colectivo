import { Component, createComponent, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearComponent } from './crear/crear.component';
export interface Usuario {
  rut: string;
  nombre: string;
  apellido: string;
  movil: string;
}

const ELEMENT_DATA: Usuario[] = [
  { rut: "11.111.111-1", nombre: 'Larrys', apellido: 'Dixon', movil: '23' },
  { rut: "11.111.111-1", nombre: 'Andrews', apellido: 'Taylor', movil: '45' },
  { rut: "11.111.111-1", nombre: 'Jamess', apellido: 'Wilson', movil: '22' },
  { rut: "11.111.111-1", nombre: 'Raymonds', apellido: 'Leon', movil: '12' },
  { rut: "11.111.111-1", nombre: 'Janets', apellido: 'Smith', movil: '1' },
  { rut: "11.111.111-1", nombre: 'Elizabeths', apellido: 'Monroe', movil: '55' },
  { rut: "11.111.111-1", nombre: 'Jeffs', apellido: 'Meza', movil: '34' },
  { rut: "11.111.111-1", nombre: 'Kyles', apellido: 'Patton', movil: '42' },
  { rut: "11.111.111-1", nombre: 'Lauras', apellido: 'Jackson', movil: '34' },
  { rut: "11.111.111-1", nombre: 'Jennifers', apellido: 'Lee', movil: '66' },
];
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['rut', 'nombre', 'apellido', 'movil', "accion"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  crearUusuario() {

    const dialogRef = this.dialog.open(CrearComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
}
