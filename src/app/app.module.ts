import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//import { SharedModule } from '../../shared';
import { HeaderComponent } from '../shared/layout/header.component';
import { FooterComponent } from '../shared/layout/footer.component';
import { StallHomePageComponent } from './stall-home-page/stall-home-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, DashboardComponent, HeaderComponent, FooterComponent, StallHomePageComponent, AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(), TabsModule.forRoot(), ButtonsModule.forRoot(), CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
