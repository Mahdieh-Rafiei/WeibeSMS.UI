import {NgModule} from '@angular/core';
import {NumbersRoutingModule, routedComponents} from './numbers-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";
import { EditUserLinesComponent } from './user-lines/edit-user-lines/edit-user-lines.component';

@NgModule({
    imports: [
        NumbersRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    entryComponents:[
      EditUserLinesComponent
    ]
})
export class NumbersModule {
}
