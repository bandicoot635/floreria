import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LogiService {

  private URL: string = "http://localhost:7777";
  public peticion: any = null;
  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  condicion: boolean = true
  private user = {
    username: "",
    password: ""
  }

  constructor(private http: HttpClient, private route: Router) { }

  login(usuario: string, contrasena: string): any {
    this.user.username = usuario,
      this.user.password = contrasena

    this.http.post(`${this.URL}` + "/login", this.user, { headers: this.httpHeaders }).subscribe((res: any) => {
      this.peticion = res;
      console.log(this.peticion);
      // console.log(this.user); //Este objeto no debe de traer el usuario y la contraseña del backend 

      if (this.peticion.estatus == false) { //Hay que componerlo
        this.condicion = false
      }

      (this.peticion.data.rol == "ADMIN") ? this.route.navigateByUrl('/menu') : this.route.navigateByUrl('/puntoVenta');
    });
    return this.peticion
  }

  estaAutenticado(): boolean {
    (this.peticion.estatus) ? this.peticion = { username: null, } : false
    return true
  }

  getConsulta() {
    return this.http.get(this.URL + "/productos/consultar")
  }

}




