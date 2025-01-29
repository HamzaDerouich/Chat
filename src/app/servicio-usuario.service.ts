import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private httpClient: HttpClient) { }

  // This method uses HttpClient to get data from the server.
  selectUser(email: string, pwd: string): Observable<Usuario[]>
  {
    return this.httpClient.get<Usuario[]>(`http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email=${email}&pwd=${pwd}`);

  }

  // This method uses HttpClient to post data to the server.
  postUser(usuario: Usuario): Observable<Usuario>
  {
    return this.httpClient.post<Usuario>(`http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php`, usuario);
  }

}
