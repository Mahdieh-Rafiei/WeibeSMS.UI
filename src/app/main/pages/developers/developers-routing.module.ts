import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DevelopersComponent} from './developers.component';
import {DeveloperListComponent} from './developer-list/developer-list.component';
import {DeveloperComponent} from './developer/developer.component';
import {DeveloperListResolverService} from './developer-list/developer-list-resolver.service';
import {DeveloperResolverService} from './developer/developer-resolver.service';
import {CreateKeyComponent} from './developer-list/create-key/create-key.component';

const routes: Routes = [{
  path: '',
  component: DevelopersComponent,
  children: [{
    path: 'list',
    component: DeveloperListComponent,
    resolve: {
      developersList: DeveloperListResolverService,
    },
    data: {
      title: 'developers list',
      num: 1
    },
  }, {
    path: 'modify/:id',
    component: DeveloperComponent,
    resolve: {
      keyData: DeveloperResolverService,
    },
    data: {
      title: 'developer show',
      num: 1
    },
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopersRoutingModule {
}

export const routedComponents = [
  DevelopersComponent,
  DeveloperListComponent,
  DeveloperComponent,
  CreateKeyComponent
];
