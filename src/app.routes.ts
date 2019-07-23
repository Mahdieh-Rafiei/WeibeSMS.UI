import {Routes} from '@angular/router';
import {LoginComponent} from './app/auth/login/login.component';
import {RegisterComponent} from './app/auth/register/register.component';
import {ForgotPasswordComponent} from './app/auth/forgot-password/forgot-password.component';
import {AuthGuard} from './app/shared/auth.guard';
import {SignUpComponent} from './app/auth/sign-up/sign-up.component';
import {AuthComponent} from './app/auth/auth.component';

export const APP_ROUTES: Routes = [

  {
    path: 'auth', component: AuthComponent, canActivate: [AuthGuard], children: [
      {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
      {path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard]},
      {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
      {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]},
    ]
  },

  {path: '**', redirectTo: 'notfound'},

];
