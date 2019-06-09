import {NgModule} from '@angular/core';
import {UserEventRoutingModule, routedComponents} from './user-event-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';
import {AddEditUserEventComponent} from './add-edit/add-edit-user-event.component';

@NgModule({
    imports: [
        UserEventRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
  entryComponents: [
    AddEditUserEventComponent
  ]

})
export class UserEventModule {
}
