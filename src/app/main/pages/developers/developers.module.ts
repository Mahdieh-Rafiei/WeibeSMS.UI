import {NgModule} from '@angular/core';
import {DevelopersRoutingModule, routedComponents} from './developers-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';

@NgModule({
  imports: [
    DevelopersRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ]

})
export class DevelopersModule {
}
