import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../adminpage/admin.service';
import { orderstv, Products, products } from '../products';


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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchText: any;


  constructor(private admin: AdminService, private router: Router) { }

  orderdata: any;
  orderdatatv: any;


  users: Users[] = [];



  ngOnInit(): void {
    this.orderdatatv = orderstv;
    this.orderdata = products;

    this.admin.getusers().subscribe((ouput) => {
      this.users = ouput;
    })
  }




  updateone(id: any) {
    this.router.navigate(['/update', id])
  }

}
