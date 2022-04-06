import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // usuario = {
  //   userName: "yair_2022",
  //   password: "admin"
  // }

  // createLogin(Usuario:usuario) {

  //   let t = localStorage.getItem('token')

  //   const httpHeaders = new HttpHeaders({
  //     'content-type': 'application/json',
  //     'Authorization': '' + t
  //   });
  //   return this.http.post(`${this.API_URL}`)
  // }

  // contrasena(){
  //   let x =document.getElementById("contrasena")
  //   if(x.type=="password"){

  //   }

  // }

}
