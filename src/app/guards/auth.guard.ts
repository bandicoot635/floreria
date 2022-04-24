import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogiService } from '../services/logi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LogiService, private route: Router) { }

  canActivate(): boolean {

    console.log('SE EJECUTA EL GUARD');
    // return this.auth.estaAutenticado()
    if (this.auth.estaAutenticado()) {
      return true;

    } else {
      this.route.navigateByUrl('/login')
      return false;
    }
  }

}
