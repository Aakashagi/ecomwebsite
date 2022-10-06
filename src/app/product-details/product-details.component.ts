import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Products, products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}


  name:any;
  class:any;
  


  name1:any;
  class1:any;


  add(){
    this.name1 = this.name;
    this.class1 = this.class;
  }





  items = ['item1', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
