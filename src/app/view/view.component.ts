import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  email:any;
  password:any;
  alert:boolean=false

  login(){
    if(this.email == 'aakash' && this.password == 'aakash123'){
      this.router.navigateByUrl('menu')
    }
    else {
      alert("please")
    }
  }
}
