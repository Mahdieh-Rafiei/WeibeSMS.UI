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
import {SingleAddContactComponent} from './app/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './app/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './app/group/add-contact/import-contact-from-other-lists/import-contact-from-other-lists.component';

import {SendMessageComponent} from "./app/send-message/send-message.component";
import {SendMessageFirstStepComponent} from "./app/send-message/send-message-first-step/send-message-first-step.component";
import {SendMessageSecondStepComponent} from "./app/send-message/send-message-second-step/send-message-second-step.component";
import {SendMessageThirdStepComponent} from "./app/send-message/send-message-third-step/send-message-third-step.component";
import {SendMessageScheduleComponent} from "./app/send-message/send-message-schedule/send-message-schedule.component";
import {SendMessageEventComponent} from "./app/send-message/send-message-event/send-message-event.component";



export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'group/:id',component: GroupComponent},
  {path: 'group',component: GroupListComponent},
  {path: 'group/:id/contact/:id',component: ContactComponent},

  {path: 'group/:id/add-contact',component: AddContactComponent , children:[
          {path:'from-file',component:AddContactFromFileComponent},
          {path:'single-contact',component:SingleAddContactComponent},
          {path:'from-list',component:ImportContactFromOtherListsComponent},
  ]},
  {path: 'send-message',component: SendMessageComponent , children:[
          {path:'first-step',component:SendMessageFirstStepComponent},
          {path:'second-step',component:SendMessageSecondStepComponent},
          {path:'third-step',component:SendMessageThirdStepComponent},
          {path:'schedule',component:SendMessageScheduleComponent},
          {path:'event',component:SendMessageEventComponent},
  ]},

  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},

  {path: '**', redirectTo: 'notfound'}
];


