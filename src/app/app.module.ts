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
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AddContactCollectionComponent } from './contact/add-contact-collection/add-contact-collection.component';
import { GroupComponent } from './contact/group/group.component';
import { GroupViewComponent } from './contact/group-view/group-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ContactComponent,
    AddContactComponent,
    AddContactCollectionComponent,
    GroupComponent,
    GroupViewComponent
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
