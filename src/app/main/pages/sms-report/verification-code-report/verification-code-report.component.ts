import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-verification-code-report',
    templateUrl: './verification-code-report.component.html',
    styleUrls: ['./verification-code-report.component.scss']
})
export class VerificationCodeReportComponent implements OnInit {

    phrase = '';

    constructor() {
    }

    ngOnInit() {
    }
    // getData(event) {
    //     this.phrase = event;
    //     this.getAllTickets();
    // }
}
