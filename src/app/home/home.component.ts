import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  orderdata:any

  ngOnInit(): void {
    this.orderdata = products
  }


  pop(){
    alert('Invalid Email');
  }

}
