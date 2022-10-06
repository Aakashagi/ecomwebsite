import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { products } from '../products';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  products:any= products;

  constructor(public table:ProductDetailsComponent) { }


  items = this.table.class1

  ngOnInit(): void {
  }

}
