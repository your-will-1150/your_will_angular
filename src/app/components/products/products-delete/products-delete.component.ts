import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  item: Item;
  
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._productService.readItemDetail(p.get('id')).subscribe((singleItem: Item) => {
        this.item = singleItem;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._productService.deleteItem(this.item.id)
  }
}
