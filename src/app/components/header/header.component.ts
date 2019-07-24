import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _logInForm: FormGroup;
  
  constructor(private _form: FormBuilder, private _service: AuthService) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this._logInForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
    })
  }

  onSubmit() {
    console.log(this._logInForm.value);
    this._service.login(this._logInForm.value).subscribe( () => console.log('login success!'));
  }
  
}
