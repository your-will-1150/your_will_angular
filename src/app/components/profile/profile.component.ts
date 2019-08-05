import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

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

  user: User;
  updateForm: FormGroup;
  updatePasswordForm: FormGroup;

  constructor(private _form: FormBuilder, private _service: AuthService, private _userService: UserService) {
    this._subscription = this._service.userInfo.subscribe( (value) => {
      this.user = value;
      this.createForm();
      this.createPasswordForm();
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._service.checkAuthentication();
    this._userService.readMe()
  }

  ngOnInit() {
    this._userService.readMe();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._isLoggedInSubscription.unsubscribe();
  }

  createForm() {
    this.updateForm = this._form.group({
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
    })
  }

  createPasswordForm() {
    this.updatePasswordForm = this._form.group({
      password: new FormControl,
      confirmPassword: new FormControl,
    })
  }

  // Add refresh page or navigate away to see changes on the profile
  onSubmit() {
    console.log(this.updateForm.value);
    this._userService.updateMe(this.updateForm.value).subscribe( () => console.log('update success!'))
  }

  onSubmitPassword() {
    console.log(this.updatePasswordForm.value);
    this._userService.updateMe(this.updatePasswordForm.value).subscribe( () => console.log('password update success!'))
  }

  onDelete() {
    this._userService.deleteMe().subscribe( () => console.log('User Deleted!'))
  }
}
