import {SharedModule} from '../../../shared/module/shared.module';
import {BillingRoutingModule, routedComponents} from './billing-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    BillingRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [
    // EditUserLinesComponent
  ]
})
export class BillingModule {
}
