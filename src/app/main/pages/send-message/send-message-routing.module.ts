import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SendMessageEventComponent} from './send-message-event/send-message-event.component';
import {SendMessageFirstStepComponent} from "./send-message-first-step/send-message-first-step.component";
import {SendMessageScheduleComponent} from "./send-message-schedule/send-message-schedule.component";
import {SendMessageSecondStepComponent} from "./send-message-second-step/send-message-second-step.component";
import {SendMessageThirdStepComponent} from "./send-message-third-step/send-message-third-step.component";
import {SendMessageComponent} from './send-message.component';

const routes: Routes = [{
    path: '',
    component: SendMessageComponent,
    children: [{
        path: 'first-step',
        component: SendMessageFirstStepComponent,
        data: {
            title: 'first-step',
            num: 1
        },
    }, {
        path: 'second-step',
        component: SendMessageSecondStepComponent,
        data: {
            title: 'second-step',
            num: 1
        },
    }, {
        path: 'third-step',
        component: SendMessageThirdStepComponent,
        data: {
            title: 'third-step',
            num: 1
        },
    }, {
        path: 'event',
        component: SendMessageEventComponent,
        data: {
            title: 'event',
            num: 1
        },
    },{
        path: 'schedule',
        component: SendMessageScheduleComponent,
        data: {
            title: 'schedule',
            num: 1
        },
    },],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SendMessageRoutingModule {
}

export const routedComponents = [
    SendMessageComponent,
    SendMessageEventComponent,
    SendMessageFirstStepComponent,
    SendMessageScheduleComponent,
    SendMessageSecondStepComponent,
    SendMessageThirdStepComponent
];
