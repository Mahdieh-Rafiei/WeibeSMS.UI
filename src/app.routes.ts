import {Routes} from '@angular/router';
import {LoginComponent} from './app/auth/login/login.component';
import {RegisterComponent} from './app/auth/register/register.component';
import {ForgotPasswordComponent} from './app/auth/forgot-password/forgot-password.component';

import {AddContactComponent} from './app/main/pages/group/add-contact/add-contact.component';
import {SingleAddContactComponent} from './app/main/pages/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './app/main/pages/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './app/main/pages/group/add-contact/import-contact-from-other-list/import-contact-from-other-lists.component';

import {AuthGuard} from './app/shared/auth.guard';

export const APP_ROUTES: Routes = [
  // {path: 'group/:groupId', component: SingleGroupComponent, canActivate: [CanActivateRouteGuard]},
  // {path: 'group', component: GroupListComponent, canActivate: [CanActivateRouteGuard]},
  {path: 'group/:groupId/contact/:contactId', component: SingleAddContactComponent},

  {
    path: 'group/:groupId/add-contact', component: AddContactComponent, children: [
      {path: 'from-file', component: AddContactFromFileComponent},
      {path: 'single-contact', component: SingleAddContactComponent},
      {path: 'single-contact/:contactId', component: SingleAddContactComponent},
      {path: 'from-list', component: ImportContactFromOtherListsComponent},
    ]
  },


  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'notfound'},

];
