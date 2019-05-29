import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserEventComponent} from "./user-event.component";


const routes: Routes = [{
    path: '',
    component: UserEventComponent,
    data: {
        title: 'user event',
        num: 1
    },
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserEventRoutingModule {
}

export const routedComponents = [
    UserEventComponent,
];
