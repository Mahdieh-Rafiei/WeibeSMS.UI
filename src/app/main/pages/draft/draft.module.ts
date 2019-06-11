import { NgModule } from '@angular/core';
import {DraftRoutingModule, routedComponents} from './draft-routing.module';
import {SharedModule} from '../../../shared/module/shared.module';
import {FileDropModule} from 'ngx-file-drop';
import {SingleDraftComponent} from './draft/single.draft.component';
import {DraftListComponent} from './draft-list/draft-list.component';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    DraftRoutingModule,
    SharedModule,
    FileDropModule
  ],
  entryComponents: [
    DraftListComponent
  ]
})
export class DraftModule { }
