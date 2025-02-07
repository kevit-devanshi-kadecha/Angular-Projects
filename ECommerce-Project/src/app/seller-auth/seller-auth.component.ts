import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService) { }

  ngOnInit(): void {  
  }

  /* data : means what is the data has a parameter and : void means what type of data is returning */
  signUp(data:object):void{
    /*using the service function and subscribing it for accessing the data*/
    this.seller.UserSignUp(data).subscribe((result)=>{
      console.log(result);
    });
  }
}
