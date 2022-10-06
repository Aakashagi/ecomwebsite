import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';


interface Users {
  id: any;
  name: any;
  email: any;
  number: any;
  state: any;
  city: any;
  address: any;
    img: any


  id1: any;
  name1: any;
  price: any;
  details: any;
  description: any;
  spectification: any;
  img1: any;


}


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  name: any;
  email: any;
  number: any;
  address: any;
  pincode: any;
  gridcheck: any;
  city: any;
  state: any;
  img: any;
  users: any
  name1: any;
  price: any;
  details: any;
  description: any;
  spectification: any;




  constructor(private carts: AdminService, private form: FormBuilder, private router: Router) {
    this.carts.adminusers().subscribe((data) => {
      this.users = data
    })
  }
  ngOnInit(): void {
  }




  getdetail(data: any) {
    this.carts.adminsaveuser(data).subscribe((result) => {
      console.warn(result)
    })
  };

  reset() {
    window.alert("Order is Confirmed,See Your Orders")
  }



  deleteone(del: any) {
    if (confirm("are you sure to delete"))
      this.carts.deleteuser(del).subscribe(data => {
      });
    this.carts.getusers().subscribe((response) => {
      this.users = response;
    });
  }


  updateone(id: any) {
    this.router.navigate(['/update', id])
  }


}
