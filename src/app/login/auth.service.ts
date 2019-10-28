import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: no-inferrable-types
  private usuarioAutenticado: boolean = false;


  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' &&
    usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.router.navigate (['/']);
     } else {
      this.usuarioAutenticado = false;
     }
  }
}
