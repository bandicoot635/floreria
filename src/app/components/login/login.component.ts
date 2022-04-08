import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { LogiService } from '../../services/logi.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user={
  //   userName:"",
  //   password:""
  // }
  constructor(private logiService:LogiService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login( userName:string, password:string ){
    // this.user.userName= userName
    // this.user.password=password

    // const user="aaron"
    // const password= "12345"
    const response =  this.logiService.login(userName, password )
    // if(response != null){


        /**
         * 
         * if(response.cargo == 'admisitrador'){
         * ruta administrador
         * }else{
         * ruta empleado
         * }
         */
    }
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


