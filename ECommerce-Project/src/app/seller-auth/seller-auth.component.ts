import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router) { }

  showLogin:boolean = false;

  ngOnInit(): void {  
  }

  /* data : means what is the data has a parameter and : void means what type of data is returning */
  signUp(data:SignUp):void{
    /*using the service function and subscribing it for accessing the data*/
    this.seller.UserSignUp(data).subscribe((result)=>{

        if(result){
          alert('User Registered Successfully');

          /*redirecting to the seller-home page import router*/
          this.router.navigate(['seller-home']);
        }
    });
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
