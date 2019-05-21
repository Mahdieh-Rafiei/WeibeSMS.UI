import {NgModule} from '@angular/core';
import {PlanRoutingModule, routedComponents} from './plan-routing.module';

@NgModule({
  imports: [
    PlanRoutingModule,
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [],
})
export class PlanModule {
}
