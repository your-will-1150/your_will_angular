import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Product } from '../../getProduct/add-item.service';
import { ItemService } from 'src/app/services/additem.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  })
export class ProductDetailComponent implements OnInit {

   
  public _UpdateproductdetailForm: FormGroup;
  

constructor(private fb: FormBuilder) {
  this.createSellerForm();
  

}

constructor(pr
 

  ngOnInit() {
    
  }

createSellerForm() {
  this._UpdateproductdetailForm = this.fb.group({
    sellername: new FormControl,
    who: new FormControl,
    what: new FormControl,
    productname: new FormControl,
    productdesc: new FormControl,
    productvalue: new FormControl
    
  });

}

onSubmit() {
  if (this._UpdateproductdetailForm.value) {
    console.log(this._UpdateproductdetailForm.value);
    this._service.checkAuthenticatio(this._UpdateproductdetailForm.value);

  onDelete() {
    this.additemservice.deleteProduct (id:Product )('Product Deleted!'))
    }   
  }


  
}


// submitproductdetailForm() {
//   console.log(this._UpdateproductdetailForm.value);
// }
// buildProductDetailForm() {
//    this.productdetailForm = this.formBuilder.group({
//    sellerName: this.FormBuilder.control(null),
//    who: this.FormBuilder.control(null),
//    what: this.FormBuilder.control(null)
// })
}