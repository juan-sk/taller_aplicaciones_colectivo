import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginResponse } from 'src/app/domain/login/LoginResponse';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = ""
  usuario: string = "";
  password: string = "";
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    // public dialogRef: MatDialogRef
  ) { }
  returnUrl: string | undefined;
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {

        this.returnUrl = params['returnUrl'];
        // if (this.returnUrl != undefined) {
        //   if (this.returnUrl[0] == "/") {
        //     // this.returnUrl = this.returnUrl.substring(1);
        //     // debugger
        //     // console.log("sdff")
        //   }
        // }
      })
  }

  async login() {

    //obtenerParametros
    let payload = {
      usuario: this.usuario,
      password: this.password
    }


    this.authService.login(payload).subscribe({
      next: (v) => {
        console.log(v)
        this.msg = ""
        //guardar token
        this.guardarToken(v.token)
        this.authService.setPerfil(v.user);

        //guardar perfil
        if (this.returnUrl) {
          console.log("a", this.returnUrl)
          this.router.navigate([this.returnUrl + ""]).catch(e => console.log(e))
        } else {
          console.log("b")
          if (v.user.tipoUsuario == 0) {
            console.log("c")
            this.router.navigate(["/garita"])

          } else if (v.user.tipoUsuario == 1) {
            console.log("d")
            this.router.navigate(["/colectivo"])

          } else {
            console.log("e")

            this.router.navigate(["/"])
          }
        }
      },
      error: (e) => this.msg = "ocurrio un error al intentar login, intente nuevamente",
      complete: () => console.log("completed")
    })




  }
  cosa() {
    this.router.navigate([this.returnUrl])

  }
  guardarToken(token: string) {
    this.authService.setToken(token);
  }

  volver(): boolean {

    if (this.returnUrl != undefined) {
      return true;
    }
    return false;
  }

  dialog() {
    // let dialogRef = dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });

    // dialogRef.close('Pizza!');
  }


}
