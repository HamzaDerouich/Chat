import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario = new Usuario('', '', '', '1');

  constructor(public router: Router, private servicio: ServicioUsuarioService) {}

  onLogin() {

    this.servicio.selectUser(this.usuario.email, this.usuario.pwd).subscribe( ( usuarios: Usuario[] ) =>
      {
          sessionStorage.setItem('Nombre', usuarios[0].nombre);
          sessionStorage.setItem('Email', usuarios[0].email);
          sessionStorage.setItem('Contrasena', usuarios[0].pwd);
          if( usuarios[0] != null && usuarios[0].nombre != 'admin' )
          {
            this.router.navigate(['/chat'],{queryParams: {nombre: usuarios[0].nombre}});

          }
      });
  }
}
