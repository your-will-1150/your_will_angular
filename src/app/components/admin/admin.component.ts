import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  // private _username: string;
  // private _subscription;
  // private _isLoggedIn;

  constructor() { }
    // constructor(private _service: AuthService) {
  //   this._subscription = this._service.userInfo.subscribe( (value) => {
  //     this._username = value.username;
  //   });
  //   this._isLoggedIn = this._service.isLoggedIn.subscribe( (value) => {
  //     this._isLoggedIn = value;
  //   });
  //   this._service.isLoggedIn.next(false)
  // }

  ngOnInit() {
  }

}
