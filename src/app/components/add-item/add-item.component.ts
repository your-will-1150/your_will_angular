import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  private _subscription;
  private _isLoggedIn: boolean;
  private _isLoggedInSubscription;
  
  user: User;
  addItemForm: FormGroup;
  
  constructor(private _form: FormBuilder, private _service: AuthService, private _productService: ProductService) { 
    this._subscription = this._service.userInfo.subscribe( (value) => {
      this.user = value;
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._service.checkAuthentication();
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.addItemForm = this._form.group({
      title: new FormControl,
      content: new FormControl,
      price: new FormControl,
      gender: new FormControl,
      category: new FormControl,
    })
  }

  onSubmit() {
    console.log(this.addItemForm.value);
    this._productService.createItem(this.addItemForm.value).subscribe( () => console.log('Item Added!'))
  }
}