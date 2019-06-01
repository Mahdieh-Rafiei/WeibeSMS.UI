import {NgModule} from '@angular/core';
import {UserNotificationRoutingModule, routedComponents} from './user-notification-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';
import {ShowNotificationComponent} from './show/show-notification.component';

@NgModule({
    imports: [
        UserNotificationRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    entryComponents: [ShowNotificationComponent]
})
export class UserNotificationModule {
}
