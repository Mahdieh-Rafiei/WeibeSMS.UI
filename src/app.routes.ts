import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {RegisterComponent} from './app/register/register.component';
import {CanActivateRouteGuard} from './app/shared/canActivateRouteGuard';
import {ForgotPasswordComponent} from './app/forgot-password/forgot-password.component';

import {GroupComponent} from './app/group/group.component';
import {GroupListComponent} from './app/group/group-list/group-list.component';
import {ContactComponent} from './app/group/contact/contact.component';
import {AddContactComponent} from './app/group/add-contact/add-contact.component';
import {SingleAddContactComponent} from './app/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './app/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './app/group/add-contact/import-contact-from-other-lists/import-contact-from-other-lists.component';
import {UserEventComponent} from './app/user-event/user-event.component';

import {SendMessageComponent} from "./app/send-message/send-message.component";
import {SendMessageFirstStepComponent} from "./app/send-message/send-message-first-step/send-message-first-step.component";
import {SendMessageSecondStepComponent} from "./app/send-message/send-message-second-step/send-message-second-step.component";
import {SendMessageThirdStepComponent} from "./app/send-message/send-message-third-step/send-message-third-step.component";
import {SendMessageScheduleComponent} from "./app/send-message/send-message-schedule/send-message-schedule.component";
import {SendMessageEventComponent} from "./app/send-message/send-message-event/send-message-event.component";

import {DraftComponent} from "./app/draft/draft/draft.component";
import {DraftListComponent} from "./app/draft/draft-list/draft-list.component";

import {TicketComponent} from "./app/tickets/ticket/ticket.component";
import {AddTicketComponent} from "./app/tickets/add-ticket/add-ticket.component";
import {TicketListComponent} from "./app/tickets/ticket-list/ticket-list.component";
import {CreateTransactionComponent} from "./app/create-transaction/create-transaction.component";

import {DevelopersComponent} from "./app/developers/developers.component";

import {SmsReportComponent} from "./app/sms-reports/sms-report/sms-report.component";
import {SmsReportListComponent} from "./app/sms-reports/sms-report-list/sms-report-list.component";
import {VerificationCodeReportComponent} from "./app/sms-reports/verification-code-report/verification-code-report.component";
import {DefinitionScheduleEventComponent} from "./app/definition-schedule-event/definition-schedule-event.component";
import {UserNotificationComponent} from "./app/user-notification/user-notification.component";
import {ChangePasswordComponent} from "./app/user-account/privacy/change-password/change-password.component";
import {PrivacyComponent} from "./app/user-account/privacy/privacy.component";
import {ProfileComponent} from "./app/user-account/profile/profile.component";
import {BillingComponent} from "./app/billing/billing.component";
import {BillingAddressComponent} from "./app/billing/billing-address/billing-address.component";
import {InvoiceListComponent} from "./app/billing/invoice-list/invoice-list.component";
import {RewardPointComponent} from "./app/user-account/reward-point/reward-point.component";

import {PlanListComponent} from "./app/plan-list/plan-list.component";

export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent,canActivate:[CanActivateRouteGuard]},

  {path: 'group/:groupId',component: GroupComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'group',component: GroupListComponent,canActivate:[CanActivateRouteGuard]},
  {path: 'group/:groupId/contact/:contactId',component: ContactComponent},

  {path: 'group/:groupId/add-contact',component: AddContactComponent , children:[
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

  {path: 'draft',component: DraftComponent},
  {path: 'draft/:id',component: DraftComponent},
  {path: 'draft-list',component: DraftListComponent},

  {path: 'ticket/:id',component: TicketComponent},
  {path: 'add-ticket',component: AddTicketComponent},
  {path: 'ticket-list',component: TicketListComponent},

  {path: 'plan-list',component: PlanListComponent},

  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},

  {path: 'sms-report-list', component: SmsReportListComponent},
  {path: 'sms-report', component: SmsReportComponent},
  {path: 'report-verification', component: VerificationCodeReportComponent},

  {path: 'create-transaction', component: CreateTransactionComponent},

  {path: 'developers', component: DevelopersComponent},

  {path: 'notification', component: UserNotificationComponent},

  {path: 'schedule-event', component: DefinitionScheduleEventComponent},

  {path: 'change-password', component: ChangePasswordComponent},

  {path:'user-event',component:UserEventComponent},

  {path:'profile',component:ProfileComponent},
  {path:'reward-point',component:RewardPointComponent},

  {path:'billing',component:BillingComponent},
  {path:'billing-address',component:BillingAddressComponent},
  {path: 'invoice-list',component: InvoiceListComponent},
  {path: 'privacy',component: PrivacyComponent},


  {path: '**', redirectTo: 'notfound'}
];


