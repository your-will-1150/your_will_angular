import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


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
      console.log(this._productdetailForm.value);
    }
  


  }

  }