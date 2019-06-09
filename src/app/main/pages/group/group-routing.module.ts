import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupComponent} from './group.component';
import {GroupListComponent} from './group-list/group-list.component';
import {AddEditGroupComponent} from './group-list/add-edit/add-edit-group.component';
import {SubGroupComponent} from './sub-group/sub-group.component';

const routes: Routes = [{
  path: '',
  component: GroupComponent,
  children: [
    {
      path: 'list',
      component: GroupListComponent,
      data: {
        title: 'group list',
        num: 1
      },
    },
    {
      path: ':groupId',
      component: SubGroupComponent,
      data: {
        title: 'sub group',
        num: 1
      },
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {
}

export const routedComponents = [
  GroupComponent,
  GroupListComponent,
  SubGroupComponent,
  AddEditGroupComponent,
];
