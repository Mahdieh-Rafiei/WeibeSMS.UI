import {NgModule} from '@angular/core';
import {DefinitionScheduleEventRoutingModule, routedComponents} from './definition-schedule-event-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";


@NgModule({
    imports: [
        DefinitionScheduleEventRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],

})
export class DefinitionScheduleEventModule {
}
