import {NgModule} from '@angular/core';
import {PrivacyRoutingModule, routedComponents} from './privacy-routing.module';
import {SharedModule} from '../../../../shared/module/shared.module';
import {DeleteAccountComponent} from './deactive-account/delete-acount/delete-account.component';

@NgModule({
  imports: [
    PrivacyRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [
    DeleteAccountComponent
  ]

})
export class PrivacyModule {
}
