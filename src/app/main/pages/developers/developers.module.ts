import {NgModule} from '@angular/core';
import {DevelopersRoutingModule, routedComponents} from './developers-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';
import {CreateKeyComponent} from './developer-list/create-key/create-key.component';

@NgModule({
  imports: [
    DevelopersRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [
    CreateKeyComponent,
  ]

})
export class DevelopersModule {
}
