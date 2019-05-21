import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlanComponent} from './plan.component';
import {PlanListComponent} from './plan-list/plan-list.component';

const routes: Routes = [{
  path: '',
  component: PlanComponent,
  children: [{
    path: '',
    component: PlanListComponent,
    data: {
      title: 'add-found',
      num: 1
    },
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanRoutingModule {
}

export const routedComponents = [
  PlanComponent,
  PlanListComponent
];
