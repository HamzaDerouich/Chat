export class Usuario
{
  nombre: string = '';
  email: string = '';
  pwd: string = '';
  activo: string = '';

  constructor(nombre: string, email: string, pwd: string, activo: string)
  {
    this.nombre = nombre;
    this.email = email;
    this.pwd = pwd;
    this.activo = activo;
  }

}
