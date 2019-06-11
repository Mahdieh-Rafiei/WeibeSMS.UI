import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingleDraftComponent} from './draft/single.draft.component';
import {DraftListComponent} from './draft-list/draft-list.component';
import {DraftComponent} from './draft.component';

const routes: Routes = [{
  path: '',
  component: DraftComponent,
  children: [
    {
      path: '',
      component: SingleDraftComponent,
      data: {
        title: 'draft',
        num: 1
      },
    },
    {
      path: 'list',
      component: DraftListComponent,
      data: {
        title: 'draft list',
        num: 1
      },
    },
    {
      path: ':id',
      component: SingleDraftComponent,
      data: {
        title: 'draft',
        num: 1
      },
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftRoutingModule {
}

export const routedComponents = [
  DraftComponent,
  SingleDraftComponent,
  DraftListComponent
];
