import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  set token(token: string) {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    } else {
      this._token = token;
    }
  }

  get token() : string | null {
    if(isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return this._token;
  }

  isTokenNotValid() {
    return !this.isTokenValid();
  }

  private isTokenValid() {
    const token = this.token;
    if(!token){
      return false;
    }

    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if(isTokenExpired){
      localStorage.clear();
      return false;
    }
    return true;
  }
}
