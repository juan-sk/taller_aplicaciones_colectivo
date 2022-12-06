import { Component, createComponent, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearComponent } from './crear/crear.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/domain/objetos/usuario/Usuario';
import { ModComponent } from './mod/mod.component';
// export interface Usuario {
//   rut: string;
//   nombre: string;
//   apellido: string;
//   movil: string;
// }


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['rut', 'nombre', 'apellido', 'movil', "accion"];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog, private usuarioService: UsuarioService) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.actualizarTalba()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  actualizarTalba() {
    this.usuarioService.listarUusarios().subscribe({
      next: (v) => this.dataSource = new MatTableDataSource(v.users),
      error: (e) => console.log({ e }),
      complete: () => console.info('complete')
    })
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
      this.actualizarTalba()
      // this.animal = result;
    });

  }
  modificar(elemento: any) {
    const dialogRef = this.dialog.open(ModComponent, {
      width: '500px',
      data: { usuario: elemento },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarTalba()
      // this.animal = result;
    });
  }
  eliminar(elemento: any) {
    const dialogRef = this.dialog.open(ModComponent, {
      width: '500px',
      data: { usuario: elemento },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarTalba()
      // this.animal = result;
    });

  }
}
