import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
  ) { }
  /* login(usuario: Usuario) {
    if (usuario.user === 'usuario@email.com' &&
    usuario.password === '123456') {
      this.usuarioAtenticado = true;
      this.router.navigate(['/']);
      } else {
        this.usuarioAutenticado = false;
      }
      }
      usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
  } */
}
