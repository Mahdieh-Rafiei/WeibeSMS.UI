import {NgModule} from '@angular/core';

import {GroupRoutingModule, routedComponents} from './group-routing.module';
import {AddEditGroupComponent} from './group-list/add-edit/add-edit-group.component';
import {SharedModule} from '../../../shared/module/shared.module';
import {FileDropModule} from 'ngx-file-drop';

@NgModule({
  imports: [
    GroupRoutingModule,
    SharedModule,
    FileDropModule,
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [
     AddEditGroupComponent
  ]
})
export class GroupModule {
}
