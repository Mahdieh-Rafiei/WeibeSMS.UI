import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BillingService} from './billing.service';
import {debug} from "util";

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit ,AfterViewChecked{
    items = [
        {title: 'Invoice', link: 'invoice-list', mode: 'invoice'},
        {title: 'Payment log', link: 'payment', mode: 'payment'},
        {title: 'Transaction log', link: 'transaction-log', mode: 'transaction'},
        {title: 'Billing address', link: 'billing-address', mode: 'address'}
    ];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private billingService: BillingService,
                private changeDetectorRef:ChangeDetectorRef) {
    }

    ngOnInit() {
          this.billingService.mode = 'invoice';
    }

    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }
    onClick(item) {
        debugger;
        this.billingService.mode = item.mode;
        this.router.navigate(['./billing/' + item.link]);
    }

}
