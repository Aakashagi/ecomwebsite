import { Component, OnInit } from '@angular/core';
import { orderstv, orderstvs, Products, products } from '../products';
products

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor() { }
  orderdata:Products[]=[]
  orderdatatv:orderstvs[]=[]
  searchText:any

  ngOnInit(): void {
    this.orderdata= products;
    this.orderdatatv=orderstv
  }
}
