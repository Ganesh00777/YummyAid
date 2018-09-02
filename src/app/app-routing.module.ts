import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StallHomePageComponent } from './stall-home-page/stall-home-page.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : '', component:LoginComponent },
  // { path : '', component:DashboardComponent },
  { path : 'login', component:LoginComponent },
  { path : 'home', component:HomeComponent },
  { path : 'stall-home', component:StallHomePageComponent },
   { path : 'admin-home', component:AdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
