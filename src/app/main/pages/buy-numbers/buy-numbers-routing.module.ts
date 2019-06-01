import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BuyNumbersListComponent} from './buy-numbers-list/buy-numbers-list.component';
import {BuyNumbersComponent} from './buy-numbers.component';
import {BuyNumbersShowComponent} from './buy-numbers-show/buy-numbers-show.component';

const routes: Routes = [{
    path: '',
    component: BuyNumbersComponent,
    children: [{
        path: 'list',
        component: BuyNumbersListComponent,
        data: {
            title: 'list',
            num: 1
        },
    }, {
        path: 'show',
        component: BuyNumbersShowComponent,
        data: {
            title: 'show',
            num: 1
        },
    }, ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BuyNumbersRoutingModule {
}

export const routedComponents = [
    BuyNumbersComponent,
    BuyNumbersShowComponent,
    BuyNumbersListComponent,
];
