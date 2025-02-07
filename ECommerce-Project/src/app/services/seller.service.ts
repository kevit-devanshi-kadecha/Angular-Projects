import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  /*injecting the http client for api calls*/
  constructor(private http:HttpClient) { }

  UserSignUp(data : SignUp)  {
    /*returning the data to the api */
    return this.http.post('http://localhost:4200/seller-auth/signup',data);
  }
}
