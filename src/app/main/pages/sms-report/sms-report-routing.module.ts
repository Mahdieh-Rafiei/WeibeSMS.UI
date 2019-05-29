import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ShowSmsReportComponent} from './show/show-sms-report.component';
import {SmsReportListComponent} from "./sms-report-list/sms-report-list.component";
import {VerificationCodeReportComponent} from "./verification-code-report/verification-code-report.component";
import {SmsReportComponent} from "./sms-report.component";

const routes: Routes = [{
    path: '',
    component: SmsReportComponent,
    children: [{
        path: 'list',
        component: SmsReportListComponent,
        data: {
            title: 'list',
            num: 1
        },
    }, {
        path: 'show',
        component: ShowSmsReportComponent,
        data: {
            title: 'show',
            num: 1
        },
    }, {
        path: 'verification-code',
        component: VerificationCodeReportComponent,
        data: {
            title: 'verification-code',
            num: 1
        },
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SmsReportRoutingModule {
}

export const routedComponents = [
    SmsReportComponent,
    ShowSmsReportComponent,
    SmsReportListComponent,
    VerificationCodeReportComponent
];
