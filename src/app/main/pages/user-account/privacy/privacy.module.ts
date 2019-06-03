import {NgModule} from '@angular/core';
import {PrivacyRoutingModule, routedComponents} from './privacy-routing.module';
import {SharedModule} from '../../../../shared/module/shared.module';

@NgModule({
  imports: [
    PrivacyRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ]

})
export class PrivacyModule {
}
