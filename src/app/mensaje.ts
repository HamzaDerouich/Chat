export class Mensaje {

  id: number = 0;
  usuario: string = '';
  fecha: string = '';
  mensaje: string = '';
  activo: number = 0;

  constructor(id: number, usuario: string, fecha: string, mensaje: string, activo: number) {
      this.id = id;
      this.usuario = usuario;
      this.fecha = fecha;
      this.mensaje = mensaje;
      this.activo = activo;
  }
}
