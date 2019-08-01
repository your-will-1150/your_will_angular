import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  public _productdetailForm: FormGroup;

  constructor(private fb: FormBuilder, private _service: AuthService) { 
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
    if (this._productdetailForm.value) {
      console.log(this._productdetailForm.value);
      this._service.login(this._productdetailForm.value);
    }
  


  }

  }