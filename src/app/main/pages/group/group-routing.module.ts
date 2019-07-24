import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupComponent} from './group.component';
import {GroupListComponent} from './group-list/group-list.component';
import {AddEditGroupComponent} from './group-list/add-edit/add-edit-group.component';
import {SingleGroupComponent} from './single-group/single-group.component';
import {SingleAddContactComponent} from './add-contact/single-add-contact/single-add-contact.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {AddContactFromFileComponent} from './add-contact/add-contact-from-file/add-contact-from-file.component';
import {ImportContactFromOtherListsComponent} from './add-contact/import-contact-from-other-list/import-contact-from-other-lists.component';

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
      path: ':groupId/contact/:contactId',
      component: SingleAddContactComponent,
    },
    {
      path: ':groupId/add-contact',
      component: AddContactComponent,
    },
    {
      path: ':groupId/add-contact/from-file',
      component: AddContactFromFileComponent,
    },
    {
      path: ':groupId/add-contact/single-contact',
      component: SingleAddContactComponent
    },
    {
      path: ':groupId/add-contact/single-contact/:contactId',
      component: SingleAddContactComponent
    },
    {
      path: ':groupId/add-contact/from-list',
      component: ImportContactFromOtherListsComponent
    },
    {
      path: ':groupId',
      component: SingleGroupComponent,
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
  SingleGroupComponent,
  AddEditGroupComponent,
  SingleAddContactComponent,
  AddContactComponent,
  AddContactFromFileComponent,
  ImportContactFromOtherListsComponent
];
