import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/models/User';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private _subscription;
  private _isLoggedIn: boolean;
  private _isLoggedInSubscription;
  public items : Item[];
  private _itemSub : Observable<any>;
  
  user: User;

  constructor(private _service: AuthService, private _productService: ProductService) {
    this._subscription = this._service.userInfo.subscribe( (value) => {
      this.user = value;
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._itemSub = this._productService.products.subscribe( value => {
      this.items = value;
    })
    this._service.checkAuthentication();
  }

  ngOnInit() {
    this._productService.readItem()
  }
}
