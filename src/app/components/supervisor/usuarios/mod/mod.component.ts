import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/domain/objetos/usuario/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {

  ngOnInit(): void {
  }

  usuarioForm;

  constructor(
    private dialogRef: MatDialogRef<ModComponent>,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let usuario = data.usuario;
    console.log({ usuario })
    this.usuarioForm = new FormGroup({
      rut: new FormControl(usuario.rut,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4),
        ]
      ),
      nombre: new FormControl(usuario.nombre,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4),
        ]
      ),
      apellido: new FormControl(usuario.apellido,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4)
        ]
      ),
      password: new FormControl(usuario.password,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4)
        ]
      ),
      movil: new FormControl(usuario.movil,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(1)
        ]
      ),
      tipoUsuario: new FormControl(usuario.tipoUsuario,
        [
          Validators.required
        ]
      ),


    });
    this.usuarioForm.controls['tipoUsuario'].setValue(usuario.tipoUsuario);
    // this.usuarioForm.patchValue({
    //   tipoUsuario: usuario.tipoUsuario
    // });
  }


  enviar() {
    let form = this.usuarioForm.value;
    console.log(this.usuarioForm.value)
    let usuario: Usuario = Usuario.fromForm(form, this.data.usuario.id)
    this.usuarioService.modificaUsuario(usuario).subscribe({
      next: (v) => { console.log(v) },
      error: (e) => console.log({ e }),
      complete: () => this.cerrar()
    })
  }
  cerrar() {
    this.dialogRef.close();
  }
}


