import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {RegisterComponent} from './app/register/register.component';
import {Register, register} from 'ts-node';
import {CanActivateRouteGuard} from './app/shared/CanActivateRouteGuard';
import {ForgotPasswordComponent} from './app/forgot-password/forgot-password.component';
import {GroupComponent} from './app/group/group.component';
import {GroupListComponent} from './app/group/group-list/group-list.component';


export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'group', component: GroupComponent},
  {path: 'group-list', component: GroupListComponent},
  {path: '**', redirectTo: 'notfound'}
];
