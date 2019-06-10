import {NgModule} from '@angular/core';
import {TicketRoutingModule, routedComponents} from './ticket-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';

@NgModule({
  imports: [
    TicketRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ]

})
export class TicketModule {
}
