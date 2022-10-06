import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  email:any;
  password:any;
  alert:boolean=false

  login(){
    if(this.email == 'aakash' && this.password == 'aakash123'){
      this.router.navigateByUrl('admin')
    }
    else {
      alert("Invalid Email or Password")
    }
  }

}
