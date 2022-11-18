import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlotaService } from 'src/app/services/flota/flota.service';

import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-mant-flota',
  templateUrl: './mant-flota.component.html',
  styleUrls: ['./mant-flota.component.css']
})
export class MantFlotaComponent implements OnInit {
  creacion: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MantFlotaComponent>,
    private flotaService: FlotaService,

  ) { }
  flotaForm = new FormGroup({
    nombre: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
      ]
    ),
    apellido: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)
      ]
    ),
    tipoUsuario: new FormControl("",
      [
        Validators.required
      ]
    ),
    fechaNacimiento: new FormControl("",
      [
        Validators.required
      ]
    ),

  })
  ngOnInit(): void {
  }

  async enviar() {
    let form = this.flotaForm.value;


    if (this.creacion) {
      this.flotaService.crearColectivo(form).subscribe({
        next: (v) => console.log({ v }),
        error: (e) => this.errorCreando,
        complete: () => console.info('complete')
      })

    } else {
      this.flotaService.modificarColectio(form).subscribe({
        next: (v) => console.log({ v }),
        error: (e) => this.errorModificando(),
        complete: () => console.info('complete')
      })

      // this.flotaService.modificarColectio(form);
    }
    console.log(this.flotaForm.value)
  }
  cerrar() {
    this.dialogRef.close()
  }
  errorCreando() {

  }
  errorModificando() {

  }
}
