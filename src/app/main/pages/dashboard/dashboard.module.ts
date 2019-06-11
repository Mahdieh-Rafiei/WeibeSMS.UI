import {NgModule} from '@angular/core';
import {DashboardRoutingModule, routedComponents} from './dashboard-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [
    ...routedComponents
  ]

})
export class DashboardModule {
}
