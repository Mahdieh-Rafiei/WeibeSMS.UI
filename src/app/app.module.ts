import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {ToastrModule} from 'ngx-toastr';
import {FileDropModule} from 'ngx-file-drop';
import {AppComponent} from './app.component';
import {APP_ROUTES} from '../app.routes';
import {ApiService} from './shared/api.service';
import {ConfigService} from './shared/config.service';
import {CanActivateRouteGuard} from './shared/canActivateRouteGuard';
import {NotificationService} from './shared/notification.service';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {SidebarComponent} from './main/layout/sidebar/sidebar.component';
import {TopNavComponent} from './main/layout/top-nav/top-nav.component';
import {AuthenticationService} from './auth/login/authentication.service';
import {RegisterService} from './auth/register/register.service';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {TicketService} from './main/pages/tickets/ticket.service';
import {SlimSidebarComponent} from './main/layout/slim-sidebar/slim-sidebar.component';
import {UserAccountService} from './main/pages/user-account/user-account.service';
import {SharedModule} from './shared/module/shared.module';
import {MainRoutingModule} from './main/main-routing.module';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './main/layout/footer/footer.component';
import {DialogComponent} from './shared/component/dialog/dialog.component';
import {AuthGuard} from './shared/auth.guard';
import {ConfirmationAddContactFromFileComponent} from './main/pages/group/add-contact/add-contact-from-file/confirmation-add-contact-from-file/confirmation-add-contact-from-file.component';
import {HelpComponent} from './main/pages/help/help.component';
import { UnderConstructionComponent } from './shared/component/under-construction/under-construction.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopNavComponent,
    ForgotPasswordComponent,

    SlimSidebarComponent,
    MainComponent,
    FooterComponent,
    DialogComponent,
    //TODO: move this c to groupModule
    ConfirmationAddContactFromFileComponent,
    HelpComponent
  ],
  entryComponents: [
    DialogComponent,
    //TODO: move this c to groupModule
    ConfirmationAddContactFromFileComponent
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
    SharedModule
  ],
  providers: [
    ApiService,
    ConfigService,
    AuthenticationService,
    AuthGuard,
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
