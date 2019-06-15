import {Routes} from '@angular/router';
import {LoginComponent} from './app/auth/login/login.component';
import {RegisterComponent} from './app/auth/register/register.component';
import {ForgotPasswordComponent} from './app/auth/forgot-password/forgot-password.component';

import {ContactComponent} from './app/main/pages/group/contact/contact.component';
import {AddContactComponent} from './app/main/pages/group/add-contact/add-contact.component';
import {SingleAddContactComponent} from './app/main/pages/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './app/main/pages/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './app/main/pages/group/add-contact/import-contact-from-other-list/import-contact-from-other-lists.component';

import {SendMessageComponent} from './app/main/pages/send-message/send-message.component';
import {SendMessageFirstStepComponent} from './app/main/pages/send-message/send-message-first-step/send-message-first-step.component';
import {SendMessageSecondStepComponent} from './app/main/pages/send-message/send-message-second-step/send-message-second-step.component';
import {SendMessageThirdStepComponent} from './app/main/pages/send-message/send-message-third-step/send-message-third-step.component';
import {SendMessageScheduleComponent} from './app/main/pages/send-message/send-message-schedule/send-message-schedule.component';
import {SendMessageEventComponent} from './app/main/pages/send-message/send-message-event/send-message-event.component';

import {RewardPointComponent} from './app/main/pages/user-account/reward-point/reward-point.component';
import {AuthGuard} from './app/shared/auth.guard';
import {HelpComponent} from "./app/main/pages/help/help.component";

export const APP_ROUTES: Routes = [
  // {path: 'group/:groupId', component: SingleGroupComponent, canActivate: [CanActivateRouteGuard]},
  // {path: 'group', component: GroupListComponent, canActivate: [CanActivateRouteGuard]},
  {path: 'group/:groupId/contact/:contactId', component: ContactComponent},

  {
    path: 'group/:groupId/add-contact', component: AddContactComponent, children: [
      {path: 'from-file', component: AddContactFromFileComponent},
      {path: 'single-contact', component: SingleAddContactComponent},
      {path: 'from-list', component: ImportContactFromOtherListsComponent},
    ]
  },

  {
    path: 'send-message', component: SendMessageComponent, children: [
      {path: 'first-step', component: SendMessageFirstStepComponent},
      {path: 'second-step', component: SendMessageSecondStepComponent},
      {path: 'third-step', component: SendMessageThirdStepComponent},
      {path: 'schedule', component: SendMessageScheduleComponent},
      {path: 'event', component: SendMessageEventComponent},
    ]
  },

  {path: 'reward-point', component: RewardPointComponent},
  // {path: 'help', component: HelpComponent},

  // {path: 'fund-list', component: FundListComponent},
  // {path: 'fund', component: FundComponent},


  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'notfound'},

];
