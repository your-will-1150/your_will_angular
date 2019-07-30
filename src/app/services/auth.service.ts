import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/LoginUser';
import { Token } from '../models/Token';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/User';
import { Router } from '@angular/router';

const Api_Url = "http://yourwill-dev.us-east-1.elasticbeanstalk.com";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new Subject<User>();
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) {
  }

  public checkAuthentication() :void {
    if(localStorage.getItem('auth_token')) {
      console.log('Authenticated');
        this.getMe();
        this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }
  }
   
  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/user/all`, regUserData);
  }

  login(loginUserData: LoginUser) {
    return this._http.post(`${Api_Url}/auth/login`, loginUserData).subscribe
      ((token: Token) => {
        localStorage.setItem('auth_token', token.Authorization);
        this.getMe();
        this._router.navigate(['/']);
        this.isLoggedIn.next(true);
      });
  }

  logout() {
    // console.log(localStorage.getItem('auth_token'))
    this.isLoggedIn.next(false);
    // console.log(this.setHeaders());
    // this._http.post(`${Api_Url}/auth/logout`, { headers: this.setHeaders() }).subscribe();
    localStorage.clear();
  }

  getMe() {
    return this._http.get(`${Api_Url}/user/me`, { headers: this.setHeaders() }).subscribe((user: User) => { this.userInfo.next(user); });
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
  }
}
