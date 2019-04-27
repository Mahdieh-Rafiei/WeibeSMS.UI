import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {RegisterComponent} from './app/register/register.component';
import {CanActivateRouteGuard} from './app/shared/CanActivateRouteGuard';
import {ForgotPasswordComponent} from './app/forgot-password/forgot-password.component';
import {GroupComponent} from './app/group/group.component';
import {GroupListComponent} from './app/group/group-list/group-list.component';
import {ContactComponent} from './app/group/contact/contact.component';
import {AddContactComponent} from './app/group/add-contact/add-contact.component';

export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'group/:id',component: GroupComponent},
  {path: 'group',component: GroupListComponent},
  {path: 'group/:id/contact/:id',component: ContactComponent},
  {path: 'group/:id/add-contact',component: AddContactComponent,},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '**', redirectTo: 'notfound'}
];
