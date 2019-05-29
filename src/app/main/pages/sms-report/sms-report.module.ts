import {NgModule} from '@angular/core';
import {SmsReportRoutingModule, routedComponents} from './sms-report-routing.module';
import {SharedModule} from "../../../shared/module/shared.module";


@NgModule({
    imports: [
        SmsReportRoutingModule,
        SharedModule
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class SmsReportModule {
}
