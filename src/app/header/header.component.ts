import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../orders/order.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


searchText:any;


  constructor(private cart:CartService,private order:OrderService) { 
  }

  ngOnInit(): void {
  }



  itemcount(){
    return this.cart.itemscount();
  }

  orderlist(){
    return this.order.itemscount();
  }

 
}
