import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LogiService {

  private URL: string = "http://localhost:7777/login";
  public peticion: any = null;
  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  condicion:boolean=true
  user = {
    username: "",
    password: ""
  }

  private URL2: string = "http://localhost:7777/productos/consultar";

  constructor(private http: HttpClient, private route: Router) { }

  login(usuario: string, contrasena: string): any {
    this.user.username = usuario,
    this.user.password = contrasena

    this.http.post(`${this.URL}`, this.user, { headers: this.httpHeaders }).subscribe((res: any) => {
      this.peticion = res;
      console.log(this.peticion);
      if (this.peticion.username != this.user.username) {
         this.condicion =false
      }
  


      if (this.peticion.rol == "ADMIN") {
        this.route.navigateByUrl('/menu')
      } else if (this.peticion.rol == "USER") {
        this.route.navigateByUrl('/puntoVenta')
      }
    });
    return this.peticion
  }

  estaAutenticado(): boolean {
    if (this.peticion == null) {
      this.peticion = {
        username: null,
      } 
    }
    if (this.peticion.username != this.user.username) {
      return false
    }

    return true
    // return this.peticion.username && this.peticion.password ==true ;
  }

  getConsulta() {
    return this.http.get(this.URL2)
  }

}




