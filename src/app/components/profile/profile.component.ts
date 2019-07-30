import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _subscription;
  private _username: string;
  private _isLoggedIn: boolean;
  private _isLoggedInSubscription;
  private _updateForm: FormGroup;
  

  constructor(private _form: FormBuilder, private _service: AuthService, private _userService: UserService) {
    this._subscription = this._service.userInfo.subscribe( (value) => {
      this._username = value.username;
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._service.checkAuthentication();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._updateForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
    })
  }

  onSubmit() {
    console.log(this._updateForm.value);
    this._userService.updateMe(this._updateForm.value).subscribe( () => console.log('update success!'))
  }

}
