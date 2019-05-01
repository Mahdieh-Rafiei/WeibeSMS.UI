import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from '../app.routes';
import {ApiService} from './shared/api.service';
import {ConfigService} from './shared/config.service';
import {AuthenticationService} from './login/authentication.service';
import {RegisterService} from './register/register.service';
import {CanActivateRouteGuard} from './shared/canActivateRouteGuard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { ContactComponent } from './group/contact/contact.component';
import { AddContactComponent } from './group/add-contact/add-contact.component';
import {NotificationService} from './shared/notification.service';

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
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { AddTicketComponent } from './tickets/add-ticket/add-ticket.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { PlanListComponent } from './invoices/plan-list/plan-list.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { SmsReportListComponent } from './sms-reports/sms-report-list/sms-report-list.component';
import { SmsReportComponent } from './sms-reports/sms-report/sms-report.component';
import { DefinitionScheduleEventComponent } from './definition-schedule-event/definition-schedule-event.component';


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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    ConfigService,
    AuthenticationService,
    RegisterService,
    CanActivateRouteGuard,
    NotificationService,
    UserEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
