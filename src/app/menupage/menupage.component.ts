
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute} from '@angular/router';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../orders/order.service';
import { Products,products } from '../products';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private out:ActivatedRoute,private carts:CartService,private orders:OrderService) { }
  
  product:any;



  ngOnInit(): void {
    const route = this.out.snapshot.paramMap;
    const productroute = Number(route.get('id'));
    this.product = products.find(product => product.id === productroute);


  }


 addcartts(product:any){
  this.carts.addcart(product);
 }


 buynow(product:any){
  this.orders.addcart(product);
  window.alert('Butnow')
 }



}
