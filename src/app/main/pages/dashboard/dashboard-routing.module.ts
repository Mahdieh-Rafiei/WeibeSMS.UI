import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CanActivateRouteGuard} from '../../../shared/canActivateRouteGuard';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [CanActivateRouteGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}

export const routedComponents = [
  DashboardComponent,
];
