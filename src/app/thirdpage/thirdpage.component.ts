import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../adminpage/admin.service';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../orders/order.service';



interface Users {
  id: any;
  name: any;
  email: any;
  number: any;
  state: any;
  city: any;
  address: any;
  img: any;
  price: any;
  details: any;
  description: any;
  spectification: any;

}

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {

  constructor(private out:ActivatedRoute,private carts:CartService,private orders:OrderService,private admin:AdminService) { }


  val:any;
  users:Users[]=[];
  user:any


  ngOnInit(): void {
    let sub = this.out.params.subscribe(output=>{
      this.val = output['id'];
    });
    console.log("id:" + this.val);
    this.admin.getupdateuser(this.val).subscribe(data=>{
      this.user = data;
    });;





    
  }



  addcartts(product:any){
    this.carts.addcart(product);
   }
  
  
   buynow(product:any){
    this.orders.addcart(product);
    window.alert('Butnow')
   }


  

}
