import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

const Api_Url = "https://yourwillflask-api.herokuapp.com";
// const Api_Url = "http://localhost:5000";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  readMe() {
    return this._http.get(`${Api_Url}/user/me`, { headers: this.getHeaders() });
  }
  
  updateMe(username: User) {
    return this._http.put<User>(`${Api_Url}/user/me`, username, { headers: this.getHeaders() });
  }

  deleteMe() {
    return this._http.delete(`${Api_Url}/user/me`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
  }
}
