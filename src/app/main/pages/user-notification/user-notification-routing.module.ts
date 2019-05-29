import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserNotificationComponent} from "./list/user-notification.component";
import {ShowNotificationComponent} from "./show/show-notification.component";

const routes: Routes = [{
    path: '',
    component: UserNotificationComponent,
    data: {
        title: 'add-found',
        num: 1
    },
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserNotificationRoutingModule {
}

export const routedComponents = [
    UserNotificationComponent,
    ShowNotificationComponent
];
