import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/objetos/usuario/Usuario';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authService.getToken();
    const u = this.authService.getPerfil();
    console.log({ route, u })
    let garita = "garita"
    let colectivo = "colectivo";
    if (token) {
      if (route) {
        if (route.routeConfig) {

          if (route.routeConfig.path == garita && u.tipoUsuario == 0) {
            return true;
          } else if (route.routeConfig.path == colectivo && u.tipoUsuario == 1) {
            return true
          }
        }
      }

      // let user = this.authService.getPerfil();
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
