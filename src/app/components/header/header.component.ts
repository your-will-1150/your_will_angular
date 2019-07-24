import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _logInForm: FormGroup;
  
  constructor(private _form: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this._logInForm = this._form.group({
      userName: new FormControl,
      password: new FormControl,
    })
  }

  onSubmit() {
    console.log(this._logInForm.value);
  }
  
}
