import {NgModule} from '@angular/core';
import {AddFundRoutingModule, routedComponents} from './add-fund-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";


@NgModule({
    imports: [
        AddFundRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class AddFundModule {
}
