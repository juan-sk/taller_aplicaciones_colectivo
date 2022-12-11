import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlotaService } from 'src/app/services/flota/flota.service';

import { Colectivo } from 'src/app/domain/flota/Colectivo';
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
    movil: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(1),
      ]
    ),
    patente: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]
    ),
    dueno: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)
      ]
    ),
    marca: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)
      ]
    ),
    modelo: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)
      ]
    ),



  })
  ngOnInit(): void {
  }

  async enviar() {
    let form = this.flotaForm.value;

    let c: Colectivo = Colectivo.fromForm(form, 0)

    this.flotaService.crearColectivo(c).subscribe({
      next: (v) => {

        this.cerrar()
      },
      error: (e) => this.errorCreando,
      complete: () => console.info('complete')
    })
  }
  cerrar() {
    this.dialogRef.close()
  }
  errorCreando() {

  }
  errorModificando() {

  }
}
