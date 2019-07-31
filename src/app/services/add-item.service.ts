import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { AuthService } from './auth.service';

const Api_Url = "http://yourwill-dev.us-east-1.elasticbeanstalk.com";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor(private _http: HttpClient, private_router: Router) {
   }


getProducts () {
  return this._http.get(`${Api_Url}/item/`)

}

getProduct(id: number){
  return this.http.get<Product>(Api_Url)
  
}

addProduct (AddItem):  {
  return this.http.post<AddItem>(`${Api_Url, AddItem, httpOptions)
  ((AddItem: AddItem) => console.log(`added AddItem w/ id=${AddItem.id}`)),
  
}

updateProduct (id, AddItem): Observable<any> {
  const url = `${Api_Url}/${id}`;
  return this.http.put(url, AddItem, httpOptions)
  (tap(_ => console.log(`updated AddItem id=${id}`)),
  
  );
}

deleteProduct (id): Observable<AddItem> {
  const url = `${Api_Url}/${id}`;

  return this.http.delete<AddItem>(url, httpOptions)(
    tap(_ => console.log(`deleted AddItem id=${id}`)),
    catchError(this.handleError<AddItem>('deleteAddItem'))
  );
}



}