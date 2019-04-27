import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {RegisterComponent} from './app/register/register.component';
import {CanActivateRouteGuard} from './app/shared/CanActivateRouteGuard';
import {ForgotPasswordComponent} from './app/forgot-password/forgot-password.component';

export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '**', redirectTo: 'notfound'}
];
