import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Item } from '../models/Item';

const Api_Url = "https://yourwillflask-api.herokuapp.com";
// const Api_Url = "http://localhost:5000";

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

  // readItemDetail(id: string) {
  //   return this._http.get(`${Api_Url}/item${id}`, { headers: this.getHeaders() });
  // }

  updateItem(item: Item) {
    return this._http.put<Item>(`${Api_Url}/item`, item, { headers: this.getHeaders() });
  }

  deleteItem() {
    return this._http.delete(`${Api_Url}/item`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
  }
}
