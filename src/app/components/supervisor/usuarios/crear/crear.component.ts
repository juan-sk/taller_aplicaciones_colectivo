import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CrearComponent>
  ) { }

  usuarioForm = new FormGroup({
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
  enviar() {
    console.log(this.usuarioForm.value)
  }
  cerrar() {
    this.dialogRef.close();
  }
}
