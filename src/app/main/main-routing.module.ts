import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
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
        path: 'buy-numbers',
        loadChildren: '.\/pages\/buy-numbers\/buy-numbers.module#BuyNumbersModule',
      },
      {
        path: 'developer',
        loadChildren: '.\/pages\/developers\/developers.module#DevelopersModule',
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
