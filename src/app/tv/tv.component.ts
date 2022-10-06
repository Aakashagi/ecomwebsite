import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../orders/order.service';
import { orderstv, orderstvs } from '../products';





@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {





  constructor(private out:ActivatedRoute,private carts:CartService,private orders:OrderService) { }

  product:any

  ngOnInit(): void {
    const route = this.out.snapshot.paramMap;
    const productroute = Number(route.get('id'));
    this.product = orderstv.find(product => product.id === productroute);
  }

 addcartts(product:any){
  this.carts.addcart(product);
  window.alert('Add to Cart');
 }


 buynow(product:any){
  this.orders.addcart(product);
 }

}
