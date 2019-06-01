import {NgModule} from '@angular/core';
import {BuyNumbersRoutingModule, routedComponents} from './buy-numbers-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";


@NgModule({
    imports: [
        BuyNumbersRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class BuyNumbersModule {
}
