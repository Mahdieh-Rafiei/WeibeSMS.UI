import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {LoginLogComponent} from './login-log/login-log.component';
import {DeactiveAccountComponent} from './deactive-account/deactive-account.component';
import {PrivacyComponent} from './privacy.component';
import {LoginLogResolverService} from './login-log/login-log-resolver.service';
import {DeleteAccountComponent} from './deactive-account/delete-acount/delete-account.component';

const routes: Routes = [{
  path: '',
  component: PrivacyComponent,
  children: [{
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {
      title: 'change password',
      num: 1
    },
  }, {
    path: 'login-log',
    component: LoginLogComponent,
    resolve: {
      loginLog: LoginLogResolverService,
    },
    data: {
      title: 'login log',
      num: 1
    },
  }, {
    path: 'deactive-account',
    component: DeactiveAccountComponent,
    data: {
      title: 'deActive account',
      num: 1
    },
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyRoutingModule {
}

export const routedComponents = [
  PrivacyComponent,
  ChangePasswordComponent,
  LoginLogComponent,
  DeactiveAccountComponent,
  DeleteAccountComponent
];
