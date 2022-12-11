import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Colectivo } from 'src/app/domain/flota/Colectivo';
import { FlotaService } from 'src/app/services/flota/flota.service';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-mod-flota',
  templateUrl: './mod-flota.component.html',
  styleUrls: ['./mod-flota.component.css']
})
export class ModFlotaComponent implements OnInit {
  creacion: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModFlotaComponent>,
    private flotaService: FlotaService,

  ) {
    let colectivo = data.colectivo;
    this.flotaForm = new FormGroup({
      movil: new FormControl(colectivo.movil,
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(1),

        ]
      ),
      patente: new FormControl(colectivo.patente,
        [
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(8),

        ]
      ),
      dueno: new FormControl(colectivo.dueno,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4)
        ]
      ),
      marca: new FormControl(colectivo.marca,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4)
        ]
      ),
      modelo: new FormControl(colectivo.modelo,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4)
        ]
      ),



    })
  }
  flotaForm: any;
  ngOnInit(): void {

  }

  async enviar() {


    let form = this.flotaForm.value;
    // form.idColectivo = this.data.idColectivo;
    let colectivo: Colectivo = Colectivo.fromForm(form, this.data.colectivo.idColectivo)
    this.flotaService.modificarColectio(colectivo).subscribe({
      next: (v) => this.cerrar(),
      error: (e) => this.errorModificando(),
      complete: () => console.info('complete')
    })

    // this.flotaService.modificarColectio(form);

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
