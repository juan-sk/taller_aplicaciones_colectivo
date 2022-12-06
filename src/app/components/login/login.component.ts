import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = "";
  pass: string = "";
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
      user: this.user,
      password: this.pass
    }
    try {
      //validar con backend
      let response = await this.authService.login(payload)
      console.log(response)
      //guardar token
      this.guardarToken(response as string)
      //guardar perfil
      if (this.returnUrl) {
        this.router.navigate([this.returnUrl])
      } else {
        this.router.navigate(["/"])
      }
    } catch (error) {

    }


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
