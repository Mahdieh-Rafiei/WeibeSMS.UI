import {NgModule} from '@angular/core';
import {SendMessageRoutingModule, routedComponents} from './send-message-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";


@NgModule({
    imports: [
        SendMessageRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class SendMessageModule {
}
