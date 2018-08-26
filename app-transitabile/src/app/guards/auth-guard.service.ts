import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { AuthService } from './../views/pages/login/auth.service';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuardService implements CanActivate {
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  /* CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.usuarioEstaAutenticado()) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      } */
    //{

  //}
}
