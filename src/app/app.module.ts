import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {FileDropModule} from 'ngx-file-drop';
import {NgxPaginationModule} from 'ngx-pagination';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import {APP_ROUTES} from '../app.routes';
import {ApiService} from './shared/api.service';
import {ConfigService} from './shared/config.service';
import {CanActivateRouteGuard} from './shared/canActivateRouteGuard';
import {NotificationService} from './shared/notification.service';
import { NumericInputDirective } from './shared/numeric-input.directive';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthenticationService} from './login/authentication.service';
import {RegisterService} from './register/register.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { ContactComponent } from './group/contact/contact.component';
import { AddContactComponent } from './group/add-contact/add-contact.component';
import { SingleAddContactComponent } from './group/add-contact/single-add-contact/single-add-contact.component';
import { AddContactFromFileComponent } from './group/add-contact/add-contact-from-file/add-contact-from-file.component';
import { ImportContactFromOtherListsComponent } from './group/add-contact/import-contact-from-other-lists/import-contact-from-other-lists.component';
import { UserEventComponent } from './user-event/user-event.component';
import { UserEventService} from './user-event/user-event.service';
import { SendMessageComponent } from './send-message/send-message.component';
import { SendMessageFirstStepComponent } from './send-message/send-message-first-step/send-message-first-step.component';
import { SendMessageSecondStepComponent } from './send-message/send-message-second-step/send-message-second-step.component';
import { SendMessageThirdStepComponent } from './send-message/send-message-third-step/send-message-third-step.component';
import { SendMessageScheduleComponent } from './send-message/send-message-schedule/send-message-schedule.component';
import { SendMessageEventComponent } from './send-message/send-message-event/send-message-event.component';
import { DraftComponent } from './draft/draft/draft.component';
import { DraftListComponent } from './draft/draft-list/draft-list.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { AddTicketComponent } from './tickets/add-ticket/add-ticket.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { InvoiceListComponent } from './billing/invoice-list/invoice-list.component';
import { SmsReportListComponent } from './sms-reports/sms-report-list/sms-report-list.component';
import { SmsReportComponent } from './sms-reports/sms-report/sms-report.component';
import { DefinitionScheduleEventComponent } from './definition-schedule-event/definition-schedule-event.component';
import {TicketService} from './tickets/ticket.service';
import { StatusTranslatorPipe } from './tickets/status-translator.pipe';
import { VerificationCodeReportComponent } from './sms-reports/verification-code-report/verification-code-report.component';
import { DevelopersComponent } from './developers/developers.component';
import { SlimSidebarComponent } from './slim-sidebar/slim-sidebar.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';

import { PrivacyComponent } from './user-account/privacy/privacy.component';
import { ProfileComponent } from './user-account/profile/profile.component';
import { RewardPointComponent } from './user-account/reward-point/reward-point.component';
import { DeactiveAccountComponent } from './user-account/privacy/deactive-account/deactive-account.component';
import { LoginLogComponent } from './user-account/privacy/login-log/login-log.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './billing/payment/payment.component';
import { ChangePasswordComponent } from './user-account/privacy/change-password/change-password.component';
import {UserAccountService} from './user-account/user-account.service';
import { BillingAddressComponent } from './billing/billing-address/billing-address.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        SidebarComponent,
        TopNavComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        GroupComponent,
        GroupListComponent,
        ContactComponent,
        AddContactComponent,
        SingleAddContactComponent,
        AddContactFromFileComponent,
        ImportContactFromOtherListsComponent,
        UserEventComponent,
        SendMessageComponent,
        SendMessageFirstStepComponent,
        SendMessageSecondStepComponent,
        SendMessageThirdStepComponent,
        SendMessageScheduleComponent,
        SendMessageEventComponent,
        DraftComponent,
        DraftListComponent,
        TicketListComponent,
        TicketComponent,
        AddTicketComponent,
        PlanListComponent,
        InvoiceListComponent,
        CreateTransactionComponent,
        SmsReportListComponent,
        SmsReportComponent,
        DefinitionScheduleEventComponent,
        StatusTranslatorPipe,
        VerificationCodeReportComponent,
        DevelopersComponent,
        SlimSidebarComponent,
        UserNotificationComponent,
        ProfileComponent,
        ChangePasswordComponent,
        BillingAddressComponent,
        NumericInputDirective,
        ProfileComponent,
        PrivacyComponent,
        RewardPointComponent,
        DeactiveAccountComponent,
        LoginLogComponent,
        BillingComponent,
        PaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    FileDropModule,
    NgxPaginationModule,

    MatButtonModule,
  ],
  providers: [
    ApiService,
    ConfigService,
    AuthenticationService,
    RegisterService,
    CanActivateRouteGuard,
    NotificationService,
    UserEventService,
    TicketService,
    UserAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
