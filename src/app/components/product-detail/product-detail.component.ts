import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  })
export class ProductDetailComponent implements OnInit {

   
  public _productdetailForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.createSellerForm();
  

}
 

  ngOnInit() {
    
  }

createSellerForm() {
  this._productdetailForm = this.fb.group({
    sellername: new FormControl,
    who: new FormControl,
    what: new FormControl,
    productname: new FormControl,
    productdesc: new FormControl,
    productvalue: new FormControl
    
  });

}

onSubmit() {
  if (this._productdetailForm.valid) {
    console.log("Form Submitted!");
  }


  
}


// submitproductdetailForm() {
//   console.log(this._productdetailForm.value);
// }
// buildProductDetailForm() {
//    this.productdetailForm = this.formBuilder.group({
//    sellerName: this.FormBuilder.control(null),
//    who: this.FormBuilder.control(null),
//    what: this.FormBuilder.control(null)
// })
}