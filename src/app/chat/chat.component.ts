import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  nombre!: string | null;

  constructor(public router: Router)
  {
      this.nombre = sessionStorage.getItem('Nombre');
  }

  cerrarSesion()
  {
      alert("Adios, te esperamos de vuelta!!")
      sessionStorage.clear();
      this.router.navigate(['/login']);
  }

}
