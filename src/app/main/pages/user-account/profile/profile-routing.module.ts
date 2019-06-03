import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {InfoComponent} from './info/info.component';
import {ChangeNumberComponent} from './change-number/change-number.component';
import {ChangeEmailComponent} from './change-email/change-email.component';
import {SenderIdComponent} from './sender-id/sender-id.component';
import {VerifyNumberComponent} from './change-number/verify-number/verify-number.component';
import {InfoResolverService} from './info/info-resolver.service';

const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children: [{
    path: 'info',
    component: InfoComponent,
    resolve: {
      info: InfoResolverService,
    },
    data: {
      title: 'info profile',
      num: 1
    },
  }, {
    path: 'change-number',
    component: ChangeNumberComponent,
    data: {
      title: 'change number',
      num: 1
    },
  }, {
    path: 'change-email',
    component: ChangeEmailComponent,
    data: {
      title: 'change email',
      num: 1
    },
  }, {
    path: 'sender-id',
    component: SenderIdComponent,
    data: {
      title: 'sender id',
      num: 1
    },
  }, {
    path: 'verify-number',
    component: VerifyNumberComponent,
    data: {
      title: 'verify number',
      num: 1
    },
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
}

export const routedComponents = [
  ProfileComponent,
  InfoComponent,
  ChangeNumberComponent,
  ChangeEmailComponent,
  SenderIdComponent,
  VerifyNumberComponent,
];
