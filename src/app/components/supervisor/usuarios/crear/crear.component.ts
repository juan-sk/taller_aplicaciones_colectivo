import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ChildActivationStart } from '@angular/router';
import { Usuario } from 'src/app/domain/objetos/usuario/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CrearComponent>,
    private usuarioService: UsuarioService
  ) { }

  usuarioForm = new FormGroup({
    rut: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
      ]
    ),
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
    password: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)
      ]
    ),
    movil: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(1)
      ]
    ),
    tipoUsuario: new FormControl("",
      [
        Validators.required
      ]
    ),


  })
  ngOnInit(): void {

  }
  enviar() {
    let form = this.usuarioForm.value;
    console.log(this.usuarioForm.value)
    let usuario: Usuario = Usuario.fromForm(form)
    this.usuarioService.crearUsuario(usuario).subscribe({
      next: (v) => { console.log(v) },
      error: (e) => console.log({ e }),
      complete: () => this.cerrar()
    })
  }
  cerrar() {
    this.dialogRef.close();
  }
}
