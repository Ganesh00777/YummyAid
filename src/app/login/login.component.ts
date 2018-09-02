import { Component, Input, OnInit }  from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'form-field-overview-example',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  title = 'Yummy App';

  username : string;
  password : string;
  userInputs: boolean = false;

  constructor(private router : Router) {
  }
 

  customer () {
    this.router.navigate(["home"]);
  }
  login(usertype: string) : void {
    if(usertype === 'stall') {
      this.router.navigate(["home"]);
    } 
    else if(usertype === 'admin') {
      if(this.username == 'admin' && this.password == 'admin'){
        this.router.navigate(["home"]);
      } else {
        this.userInputs = true;
      }
    }
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["home"]);
    }else {
      //alert("Invalid credentials");
    }
  }
}
