import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  item: Item;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.readItemDetail(routeData.get('id')).subscribe((singleItem: Item) => {
        this.item = singleItem;
      })
    })
  }

}
