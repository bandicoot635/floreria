import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LogiService {

  constructor(private http: HttpClient) { }

   private URL:string="http://localhost:7777/login"

  login(usuario: string, contrasena: string): any {
    let user = {
      user: usuario,
      pass: contrasena
    }

    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
    });
  

    let peticion = null;
    this.http.post(`${this.URL}`, user, { headers: httpHeaders }).subscribe(res => {
      peticion = res;
      console.log(peticion)

    });

    return peticion

  }
}




