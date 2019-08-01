import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';

// const Api_Url = "https://yourwillflask-api.herokuapp.com";
const Api_Url = "http://localhost:5000";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  createItem(itemData: Item) {
    return this._http.post(`${Api_Url}/item`, itemData);
  };
  
  readItem() {
    return this._http.get(`${Api_Url}/item`, { headers: this.getHeaders() });
  }

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
