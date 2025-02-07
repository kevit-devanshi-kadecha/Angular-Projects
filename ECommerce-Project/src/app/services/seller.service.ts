import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  /*injecting the http client for api calls*/
  constructor(private http:HttpClient) { }

  UserSignUp(data : any)  {
    /*returning the data to the api */
    return this.http.post('http://localhost:4200/seller-auth/signup',data);
  }
}
