import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Item } from 'src/app/models/Item';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

  private _isLoggedIn: boolean;
  private _isLoggedInSubscription;
  
  item: Item;
  itemId: any;
  
  updateItemForm: FormGroup;
  constructor(private _form: FormBuilder, 
              private _activatedRoute: ActivatedRoute, 
              private _productService: ProductService, 
              private _router: Router, 
              private _service: AuthService, 
              private _userService: UserService) {
    this._activatedRoute.paramMap.subscribe(p => {
      this.itemId = p.get('id')
      this._productService.readItemDetail(p.get('id')).subscribe((singleItem: Item) => {
        this.item = singleItem;
        this.createForm();
      });
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._service.checkAuthentication();
    this._userService.readMe()
  }

  ngOnInit() {
    this._userService.readMe()
  }

  createForm() {
    this.updateItemForm = this._form.group({
      title: new FormControl(this.item.title),
      content: new FormControl(this.item.content),
      price: new FormControl(this.item.price),
      gender: new FormControl(this.item.gender),
      category: new FormControl(this.item.category),
    })
  }

  onSubmit() {
    // const updateItem: Item = {
    //   title: form.value.title,
    //   content: form.value.content,
    //   price: form.value.price,
    //   gender: form.value.gender,
    //   category: form.value.category,
    // };
    this._productService.updateItem(this.updateItemForm.value, this.itemId).subscribe(d => {
      this._router.navigate(['/products'])
    });
  }
}
