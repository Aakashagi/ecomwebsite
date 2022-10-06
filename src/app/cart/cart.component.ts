import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../orders/order.service';
import { Products } from '../products';
import { CartService } from './cart.service';



interface Users {
  id:any;
  name:any;
  email:any;
  number:any;
  state:any;
  city:any;
  address:any;
  img:any
  model:any
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
name: any;
email: any;
number: any;
address:any;
pincode:any;
gridcheck:any;
city:any;
full:any;
state:any;
img:any;
model:any;

users:any
  constructor(private carts:CartService,private form:FormBuilder,private order:OrderService) { 
    this.carts.users1().subscribe((data)=>{
      this.users = data
    })
  }

  product:any


  check= this.form.group({name:'',address:''})

  ngOnInit(): void {
  }


  items:any = this.carts.getitems();

 



  ondelete(dar:any){
    const index = this.items.indexOf(dar);
    this.items.splice(index, 1);
}

  buynow(product:any){
    this.order.addcart(product);
    window.alert('Buynow');
  }





  getdetail(data:any){
    this.carts.saveuser1(data).subscribe((result)=>{
     console.warn(result)
    })
  };

  reset(){
    window.alert("Order is Confirmed,See Your Orders" )
  }



  deleteone(extra:any) {
    this.items.splice(this.items.indexOf(extra), 1);
  }
  



}
