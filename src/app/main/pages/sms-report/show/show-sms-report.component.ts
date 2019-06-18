import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sms-report',
    templateUrl: './show-sms-report.component.html',
    styleUrls: ['./show-sms-report.component.scss']
})
export class ShowSmsReportComponent implements OnInit {

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
