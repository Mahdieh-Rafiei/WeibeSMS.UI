import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularEditorModule} from '@kolkov/angular-editor';

import {ToastrModule} from 'ngx-toastr';
import {FileDropModule} from 'ngx-file-drop';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {AppComponent} from './app.component';
import {APP_ROUTES} from '../app.routes';
import {ApiService} from './shared/api.service';
import {ConfigService} from './shared/config.service';
import {CanActivateRouteGuard} from './shared/canActivateRouteGuard';
import {NotificationService} from './shared/notification.service';
import {NumericInputDirective} from './shared/numeric-input.directive';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {SidebarComponent} from './main/layout/sidebar/sidebar.component';
import {TopNavComponent} from './main/layout/top-nav/top-nav.component';
import {DashboardComponent} from './main/pages/dashboard/dashboard.component';
import {AuthenticationService} from './auth/login/authentication.service';
import {RegisterService} from './auth/register/register.service';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {GroupComponent} from './main/pages/group/group.component';
import {GroupListComponent} from './main/pages/group/group-list/group-list.component';
import {ContactComponent} from './main/pages/group/contact/contact.component';
import {AddContactComponent} from './main/pages/group/add-contact/add-contact.component';
import {SingleAddContactComponent} from './main/pages/group/add-contact/single-add-contact/single-add-contact.component';
import {AddContactFromFileComponent} from './main/pages/group/add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './main/pages/group/add-contact/import-contact-from-file/import-contact-from-other-lists.component';

import {SendMessageComponent} from './main/pages/send-message/send-message.component';
import {SendMessageFirstStepComponent} from './main/pages/send-message/send-message-first-step/send-message-first-step.component';
import {SendMessageSecondStepComponent} from './main/pages/send-message/send-message-second-step/send-message-second-step.component';
import {SendMessageThirdStepComponent} from './main/pages/send-message/send-message-third-step/send-message-third-step.component';
import {SendMessageScheduleComponent} from './main/pages/send-message/send-message-schedule/send-message-schedule.component';
import {SendMessageEventComponent} from './main/pages/send-message/send-message-event/send-message-event.component';
import {DraftComponent} from './main/pages/draft/draft/draft.component';
import {DraftListComponent} from './main/pages/draft/draft-list/draft-list.component';
import {TicketListComponent} from './main/pages/tickets/ticket-list/ticket-list.component';
import {TicketComponent} from './main/pages/tickets/ticket/ticket.component';
import {AddTicketComponent} from './main/pages/tickets/add-ticket/add-ticket.component';
import {CreateTransactionComponent} from './main/pages/biling/create-transaction/create-transaction.component';
import {InvoiceListComponent} from './main/pages/biling/invoice-list/invoice-list.component';

import {TicketService} from './main/pages/tickets/ticket.service';
import {StatusTranslatorPipe} from './main/pages/tickets/status-translator.pipe';

import {SlimSidebarComponent} from './main/layout/slim-sidebar/slim-sidebar.component';

import {PrivacyComponent} from './main/pages/user-account/privacy/privacy.component';
import {RewardPointComponent} from './main/pages/user-account/reward-point/reward-point.component';
import {DeactiveAccountComponent} from './main/pages/user-account/privacy/deactive-account/deactive-account.component';
import {LoginLogComponent} from './main/pages/user-account/privacy/login-log/login-log.component';
import {BillingComponent} from './main/pages/biling/billing.component';
import {PaymentComponent} from './main/pages/biling/payment/payment.component';
import {ChangePasswordComponent} from './main/pages/user-account/privacy/change-password/change-password.component';
import {UserAccountService} from './main/pages/user-account/user-account.service';

import {BillingAddressComponent} from './main/pages/biling/billing-address/billing-address.component';
import {FundListComponent} from './main/pages/add-fund/fund-list/fund-list.component';
import {FundComponent} from './main/pages/add-fund/fund/fund.component';

import {SharedModule} from './shared/module/shared.module';
import {MainRoutingModule} from './main/main-routing.module';
import {MainComponent} from './main/main.component';

import {CreateKeyComponent} from './main/pages/developers/developer-list/create-key/create-key.component';

import {FooterComponent} from './main/layout/footer/footer.component';
import {DialogComponent} from './shared/component/dialog/dialog.component';
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
    InvoiceListComponent,
    CreateTransactionComponent,
    StatusTranslatorPipe,
    SlimSidebarComponent,
    ChangePasswordComponent,
    BillingAddressComponent,
    NumericInputDirective,
    PrivacyComponent,
    RewardPointComponent,
    DeactiveAccountComponent,
    LoginLogComponent,
    BillingComponent,
    PaymentComponent,
    FundListComponent,
    FundComponent,
    MainComponent,

    CreateKeyComponent,
    FooterComponent,
    DialogComponent,

  ],
  entryComponents: [
    CreateKeyComponent,
    DialogComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    RouterModule.forRoot(APP_ROUTES),
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    FileDropModule,
    MainRoutingModule,
    SharedModule,

    MatButtonModule,
    MatSelectModule,
  ],
  providers: [
    ApiService,
    ConfigService,
    AuthenticationService,
    RegisterService,
    CanActivateRouteGuard,
    NotificationService,
    TicketService,
    UserAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
