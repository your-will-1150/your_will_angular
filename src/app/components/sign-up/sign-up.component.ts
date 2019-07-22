import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private _signUpForm: FormGroup;
  
  constructor(private _form: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this._signUpForm = this._form.group({
      userName: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
    })
  }

  onSubmit() {
    console.log(this._signUpForm.value);
  }

}
