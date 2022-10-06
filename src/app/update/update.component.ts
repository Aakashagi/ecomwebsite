import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../adminpage/admin.service';
import { OrderService } from '../orders/order.service';

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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public out:ActivatedRoute,public router:Router,public admin:AdminService) { }


  val:any;
  users:Users[]=[];
  user:any

  ngOnInit(): void {
    let sub = this.out.params.subscribe(output=>{
      this.val = output['id'];
    });
    console.log("id:" + this.val);
    this.admin.getupdateuser(this.val).subscribe(data=>{
      this.user = data;
    })
  }


  update(){
    this.admin.updateuser(this.user).subscribe(data=>{
    });
    this.getusers();
    this.router.navigate(['admin']);
  }

  getusers(){
    this.admin.getusers().subscribe((response)=>{
      this.users = response;
    })
  }

}
