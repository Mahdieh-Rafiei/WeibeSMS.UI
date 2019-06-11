import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserLinesComponent} from './user-lines/user-lines.component';
import {NumbersComponent} from './numbers.component';
import {LinesComponent} from './lines/lines.component';
import {EditUserLinesComponent} from './user-lines/edit-user-lines/edit-user-lines.component';

const routes: Routes = [{
    path: '',
    component: NumbersComponent,
    children: [{
        path: 'my-lines',
        component: UserLinesComponent,
        data: {
            title: 'my-lines',
            num: 1
        },
    }, {
        path: 'buy-lines',
        component: LinesComponent,
        data: {
            title: 'buy-lines',
            num: 1
        },
    }, ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NumbersRoutingModule {
}

export const routedComponents = [
    NumbersComponent,
    LinesComponent,
    UserLinesComponent,
    EditUserLinesComponent
];
