import {NgModule} from '@angular/core';
import {ProfileRoutingModule, routedComponents} from './profile-routing.module';
import {SharedModule} from '../../../../shared/module/shared.module';

@NgModule({
  imports: [
    ProfileRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ]

})
export class ProfileModule {
}
