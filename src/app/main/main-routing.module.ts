import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: '.\/pages\/dashboard\/dashboard.module#DashboardModule',
      },
      {
        path: 'notification',
        loadChildren: '.\/pages\/user-notification\/user-notification.module#UserNotificationModule',
      },
      {
        path: 'user-event',
        loadChildren: '.\/pages\/user-event\/user-event.module#UserEventModule',
      },
      {
        path: 'definition-schedule-event',
        loadChildren: '.\/pages\/definition-schedule-event\/definition-schedule-event.module#DefinitionScheduleEventModule',
      },
      {
        path: 'sms-report',
        loadChildren: '.\/pages\/sms-report\/sms-report.module#SmsReportModule',
      },
      {
        path: 'lines',
        loadChildren: '.\/pages\/numbers\/numbers.module#NumbersModule',
      },
      {
        path: 'send-message',
        loadChildren: '.\/pages\/send-message\/send-message.module#SendMessageModule',
      },
      {
        path: 'developer',
        loadChildren: '.\/pages\/developers\/developers.module#DevelopersModule',
      },
      {
        path: 'profile',
        loadChildren: '.\/pages\/user-account\/profile\/profile.module#ProfileModule',
      },
      {
        path: 'privacy',
        loadChildren: '.\/pages\/user-account\/privacy\/privacy.module#PrivacyModule',
      },
      {
        path: 'group',
        loadChildren: '.\/pages\/group\/group.module#GroupModule',
      },
      {
        path: 'ticket',
        loadChildren: '.\/pages\/tickets\/ticket.module#TicketModule',
      },
      {
        path: 'draft',
        loadChildren: '.\/pages\/draft\/draft.module#DraftModule',
      },
      {
        path: 'add-fund',
        loadChildren: '.\/pages\/add-fund\/add-fund.module#AddFundModule',
      },
      {
        path: 'billing',
        loadChildren: '.\/pages\/billing\/billing.module#BillingModule',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
