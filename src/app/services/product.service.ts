import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Item } from '../models/Item';

// const Api_Url = "https://yourwillflask-api.herokuapp.com";
const Api_Url = "https://yourwill2.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products = new Subject<Item[]>();

  constructor(private _http: HttpClient) { }

  createItem(itemData: Item) {
    return this._http.post(`${Api_Url}/item/`, itemData, { headers: this.getHeaders() });
  };  
  
  readItem() {
    this._http.get(`${Api_Url}/item/`, { headers: this.getHeaders() }).subscribe( (items : Item[]) => {
      this.products.next(items);
    })
  }

  readItemDetail(item_id: string) {
    return this._http.get(`${Api_Url}/item/${item_id}`, { headers: this.getHeaders() });
  }

  updateItem(formData, id: number) {
    return this._http.put(`${Api_Url}/item/${id}`, formData, { headers: this.getHeaders() });
  }

  deleteItem(id: number) {
    return this._http.delete(`${Api_Url}/item/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
  }
}
