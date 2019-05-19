import {Routes} from '@angular/router';
import {LoginComponent} from './app/auth/login/login.component';
import {DashboardComponent} from './app/main/pages/dashboard/dashboard.component';
import {RegisterComponent} from './app/auth/register/register.component';
import {CanActivateRouteGuard} from './app/shared/canActivateRouteGuard';
import {ForgotPasswordComponent} from './app/auth/forgot-password/forgot-password.component';

import {GroupComponent} from './app/main/pages/group/group.component';
import {GroupListComponent} from './app/main/pages/group/group-list/group-list.component';
import {ContactComponent} from './app/main/pages/group/contact/contact.component';
import {AddContactComponent} from './app/main/pages/group/add-contact/add-contact.component';
import {SingleAddContactComponent} from './app/main/pages/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './app/main/pages/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './app/main/pages/group/add-contact/import-contact-from-file/import-contact-from-other-lists.component';
import {UserEventComponent} from './app/main/pages/user-event/user-event.component';

import {SendMessageComponent} from './app/main/pages/send-message/send-message.component';
import {SendMessageFirstStepComponent} from './app/main/pages/send-message/send-message-first-step/send-message-first-step.component';
import {SendMessageSecondStepComponent} from './app/main/pages/send-message/send-message-second-step/send-message-second-step.component';
import {SendMessageThirdStepComponent} from './app/main/pages/send-message/send-message-third-step/send-message-third-step.component';
import {SendMessageScheduleComponent} from './app/main/pages/send-message/send-message-schedule/send-message-schedule.component';
import {SendMessageEventComponent} from './app/main/pages/send-message/send-message-event/send-message-event.component';

import {DraftComponent} from './app/main/pages/draft/draft/draft.component';
import {DraftListComponent} from './app/main/pages/draft/draft-list/draft-list.component';

import {TicketComponent} from './app/main/pages/tickets/ticket/ticket.component';
import {AddTicketComponent} from './app/main/pages/tickets/add-ticket/add-ticket.component';
import {TicketListComponent} from './app/main/pages/tickets/ticket-list/ticket-list.component';

import {DeveloperComponent} from './app/main/pages/developers/developer/developer.component';
import {DeveloperListComponent} from './app/main/pages/developers/developer-list/developer-list.component';


import {SmsReportComponent} from './app/main/pages/sms-report/sms-report/sms-report.component';
import {SmsReportListComponent} from './app/main/pages/sms-report/sms-report-list/sms-report-list.component';
import {VerificationCodeReportComponent} from './app/main/pages/sms-report/verification-code-report/verification-code-report.component';

import {DefinitionScheduleEventComponent} from './app/main/pages/definition-schedule-event/definition-schedule-event.component';

import {UserNotificationComponent} from './app/main/pages/user-notification/user-notification.component';

import {PrivacyComponent} from './app/main/pages/user-account/privacy/privacy.component';
import {ChangePasswordComponent} from './app/main/pages/user-account/privacy/change-password/change-password.component';
import {ChangeNumberComponent} from './app/main/pages/user-account/privacy/change-number/change-number.component';
import {DeactiveAccountComponent} from './app/main/pages/user-account/privacy/deactive-account/deactive-account.component';
import {LoginLogComponent} from './app/main/pages/user-account/privacy/login-log/login-log.component';
import {ProfileComponent} from './app/main/pages/user-account/profile/profile.component';
import {RewardPointComponent} from './app/main/pages/user-account/reward-point/reward-point.component';

import {BillingComponent} from './app/main/pages/biling/billing.component';
import {PaymentComponent} from './app/main/pages/biling/payment/payment.component';
import {BillingAddressComponent} from './app/main/pages/biling/billing-address/billing-address.component';
import {InvoiceListComponent} from './app/main/pages/biling/invoice-list/invoice-list.component';
import {CreateTransactionComponent} from './app/main/pages/biling/create-transaction/create-transaction.component';

import {FundListComponent} from './app/main/pages/add-fund/fund-list/fund-list.component';
import {FundComponent} from './app/main/pages/add-fund/fund/fund.component';
import {ProfileResolverService} from './app/main/pages/user-account/profile/profile-resolver.service';
import {VerifyNumberComponent} from "./app/main/pages/user-account/privacy/change-number/verify-number/verify-number.component";


export const APP_ROUTES: Routes = [
    {path: 'index', component: DashboardComponent, canActivate: [CanActivateRouteGuard]},

    {path: 'group/:groupId', component: GroupComponent, canActivate: [CanActivateRouteGuard]},
    {path: 'group', component: GroupListComponent, canActivate: [CanActivateRouteGuard]},
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
    {
        path: 'privacy', component: PrivacyComponent, children: [
            {path: 'change-number', component: ChangeNumberComponent},
            {path: 'change-password', component: ChangePasswordComponent},
            {path: 'deactive-account', component: DeactiveAccountComponent},
            {path: 'login-log', component: LoginLogComponent},

        ]
    },

    {
        path: 'billing', component: BillingComponent, children: [
            {path: 'billing-address', component: BillingAddressComponent},
            {path: 'invoice-list', component: InvoiceListComponent},
            {path: 'payment', component: PaymentComponent},
            {path: 'create-transaction', component: CreateTransactionComponent},

        ]
    },
    {path: 'verify-number', component: VerifyNumberComponent},
    {
        path: 'profile', component: ProfileComponent, resolve: {
            profile: ProfileResolverService,
        },
    },
    {path: 'reward-point', component: RewardPointComponent},

    {path: 'draft', component: DraftComponent},
    {path: 'draft/:id', component: DraftComponent},
    {path: 'draft-list', component: DraftListComponent},

    {path: 'ticket/:id', component: TicketComponent},
    {path: 'add-ticket', component: AddTicketComponent},
    {path: 'ticket-list', component: TicketListComponent},

    {path: 'fund-list', component: FundListComponent},
    {path: 'fund', component: FundComponent},



    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},

    {path: 'sms-report-list', component: SmsReportListComponent},
    {path: 'sms-report', component: SmsReportComponent},
    {path: 'report-verification', component: VerificationCodeReportComponent},

    {path: 'developer', component: DeveloperComponent},
    {path: 'developer-list', component: DeveloperListComponent},

    {path: 'notification', component: UserNotificationComponent},

    {path: 'schedule-event', component: DefinitionScheduleEventComponent},

    {path: 'user-event', component: UserEventComponent},

    {path: 'developer-list', component: DeveloperListComponent},
    {path: 'developer', component: DeveloperComponent},

    {path: '**', redirectTo: 'notfound'}
];


