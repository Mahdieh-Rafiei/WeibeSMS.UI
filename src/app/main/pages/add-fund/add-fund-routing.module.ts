import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FundComponent} from './fund/fund.component';
import {FundListComponent} from "./fund-list/fund-list.component";
import {AddFundComponent} from "./add-fund.component";

const routes: Routes = [{
    path: '',
    component: AddFundComponent,
    children: [{
        path: 'list',
        component: FundListComponent,
        data: {
            title: 'list',
            num: 1
        },
    }, {
        path: 'show',
        component: FundComponent,
        data: {
            title: 'show',
            num: 1
        },
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddFundRoutingModule {
}

export const routedComponents = [
    AddFundComponent,
    FundComponent,
    FundListComponent,
];
