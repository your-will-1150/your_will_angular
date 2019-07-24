import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api_Url = "http://localhost:5000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/user/all`, regUserData);
  }
}
