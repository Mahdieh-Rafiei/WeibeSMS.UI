import {NgModule} from '@angular/core';
import {UserEventRoutingModule, routedComponents} from './user-event-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";

@NgModule({
    imports: [
        UserEventRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],

})
export class UserEventModule {
}
