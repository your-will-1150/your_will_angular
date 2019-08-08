import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/Review';
import { Subject } from 'rxjs';

const Api_Url = "https://yourwill2.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public userReviews = new Subject<Review[]>();

  constructor(private _http: HttpClient) { }

  createReview(reviewData: Review) {
    return this._http.post(`${Api_Url}/review/`, reviewData, { headers: this.getHeaders() });
  };

  readReviews() {
    this._http.get(`${Api_Url}/review/`, { headers: this.getHeaders() }).subscribe( (reviews : Review[]) => {
      this.userReviews.next(reviews);
    })
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
  }
}
