import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Colectivo } from 'src/app/domain/flota/Colectivo';
import { FlotaService } from 'src/app/services/flota/flota.service';
import { ConfirmarComponent } from '../../comunes/confirmar/confirmar.component';
import { MantFlotaComponent } from './mant-flota/mant-flota.component';
import { ModFlotaComponent } from './mod-flota/mod-flota.component';

@Component({
  selector: 'app-admin-flota',
  templateUrl: './admin-flota.component.html',
  styleUrls: ['./admin-flota.component.css']
})

export class AdminFlotaComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private flotaService: FlotaService) { }


  displayedColumns: string[] = ['nroColectivo', 'patente', 'dueno', 'marca', 'modelo', 'accion'];
  dataSource = new MatTableDataSource([]);
  ngOnInit(): void {
    this.actualizarTalba()
  }
  crearColectivo() {

    const dialogRef = this.dialog.open(MantFlotaComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
  modificar(elemento: any) {
    const dialogRef = this.dialog.open(ModFlotaComponent, {
      width: '500px',
      data: { colectivo: elemento },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarTalba()
      // this.animal = result;
    });
  }
  eliminar(elemento: any) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.flotaService.eliminarColectivo(elemento).subscribe({
          next: (v) => { console.log(v) },
          error: (e) => console.log({ e }),
          complete: () => this.actualizarTalba()
        })
      }
      this.actualizarTalba()
      // this.animal = result;
    });

  }
  actualizarTalba() {
    this.flotaService.listarColectivos().subscribe({
      next: (v) => this.dataSource = new MatTableDataSource(v.listaColectivos),
      error: (e) => console.log({ e }),
      complete: () => console.info('complete')
    })
  }
}
