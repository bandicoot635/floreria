import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LogiService } from '../../services/logi.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public recuerdame:boolean = false

  constructor(private logiService: LogiService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // if(localStorage.getItem('usuario')){
    //   userName=localStorage.getItem('username')
    //   this.recuerdame=true
    // }
  }
   
  login(usuario: string, password: string) {
    //  if (this.recuerdame) {
    //    localStorage.setItem('usuario', user.username)
    //  }
    const response = this.logiService.login(usuario, password)
  }
  
}




