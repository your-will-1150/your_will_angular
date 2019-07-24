import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private _signUpForm: FormGroup;
  
  constructor(private _form: FormBuilder, private _authService: AuthService) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this._signUpForm = this._form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirm_password: new FormControl,
    })
  }

  onSubmit() {
    console.log(this._signUpForm.value);
    this._authService.register(this._signUpForm.value).subscribe( () => console.log('success!'))
  }

}
