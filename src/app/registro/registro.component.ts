import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: Usuario = new Usuario('', '', '', '1');
  constructor(public route: Router, private servicio: ServicioUsuarioService) {}

  onRegister()
  {
    this.servicio.postUser(this.usuario).subscribe( ( usuario: Usuario ) =>
      {
        if( usuario != null )
        {
          this.route.navigate(['/login']);
        }
      });
  }

}
