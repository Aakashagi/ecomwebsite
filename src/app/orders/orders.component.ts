import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { products } from '../products';
import { OrderService } from './order.service';


interface Users {
  id:any;
  name:any;
  email:any;
  number:any;
  state:any;
  city:any;
  address:any;
  model:any
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  

  users:Users[]=[];

  constructor(private order:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.order.getusers().subscribe((output)=>{
      this.users=output;
    })
  }



  
items = this.order.getitems();



deleteone(del:any){
  if(confirm("are you sure to delete"))
  this.order.deleteuser(del).subscribe(data=>{
       });
       this.order.getusers().subscribe((response)=>{
        this.users = response;
       });
}


updateone(id:any){
  this.router.navigate(['/update',id])
}
}
