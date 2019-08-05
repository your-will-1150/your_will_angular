import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  private _isLoggedIn: boolean;
  private _isLoggedInSubscription;

  item: Item;
  itemId: any;
  
  constructor(private _productService: ProductService, 
              private _activatedRoute: ActivatedRoute, 
              private _router: Router,
              private _service: AuthService, 
              private _userService: UserService,
              private _location: Location) {
    this._activatedRoute.paramMap.subscribe(p => {
      this.itemId = p.get('id');
      this._productService.readItemDetail(p.get('id')).subscribe((singleItem: Item) => {
        this.item = singleItem;
      });
    });
    this._isLoggedInSubscription = this._service.isLoggedIn.subscribe( (value) => {
      this._isLoggedIn = value;
    });
    this._service.checkAuthentication();
    this._userService.readMe()
  }

  ngOnInit() {
  }

  onDelete() {
    console.log(this.itemId);
    this._productService.deleteItem(this.itemId).subscribe(() => {
      this._router.navigate(['/products'])
    })
  }

  goBack() {
    this._location.back();
  }
}
