import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html'
  // styleUrls: ['./app.component.scss']
})
export class DashboardComponent {
  title = 'app';

  constructor(private router : Router) {
  }

  users() : void {
    
      this.router.navigate(["login"]);
  }

  stall() : void {
    
      this.router.navigate(["login"]);
  }

}
