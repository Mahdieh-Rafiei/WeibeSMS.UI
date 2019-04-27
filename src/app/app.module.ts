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
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from '../app.routes';
import {ApiService} from './shared/api.service';
import {ConfigService} from './shared/config.service';
import {LoginService} from './login/login.service';
import {RegisterService} from './register/register.service';
import {CanActivateRouteGuard} from './shared/CanActivateRouteGuard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { ContactComponent } from './group/contact/contact.component';
import { AddContactComponent } from './group/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    GroupComponent,
    GroupListComponent,
    ContactComponent,
    AddContactComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    ApiService,
    ConfigService,
    LoginService,
    RegisterService,
    CanActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
