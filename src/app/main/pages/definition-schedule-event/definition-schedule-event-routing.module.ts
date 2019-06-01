import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefinitionScheduleEventComponent} from "./definition-schedule-event.component";
import {DefinitionResolverService} from './definition-resolver.service';

const routes: Routes = [{
    path: '',
    component: DefinitionScheduleEventComponent,
    resolve: {
        definitions: DefinitionResolverService
    },
    data: {
        title: 'Definition Schedule Event',
        num: 1
    },
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DefinitionScheduleEventRoutingModule {
}

export const routedComponents = [
    DefinitionScheduleEventComponent,
    DefinitionScheduleEventComponent
];
