import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
