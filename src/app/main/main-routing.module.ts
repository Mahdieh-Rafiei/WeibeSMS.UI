import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'plan',
                loadChildren: '.\/pages\/plan\/plan.module#UserNotificationModule',
            },
            {
                path: 'notification',
                loadChildren: '.\/pages\/user-notification\/user-notification.module#UserNotificationModule',
            },
            {
                path: 'user-event',
                loadChildren: '.\/pages\/user-event\/user-event.module#UserEventModule',
            },
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {
}
