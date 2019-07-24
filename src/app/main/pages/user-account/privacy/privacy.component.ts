import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivacyService} from './privacy.service';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

    items = [
        {title: 'Change password', link: 'change-password', mode: 'changePassword'},
        {title: 'Login log', link: 'login-log', mode: 'loginLog'},
        {title: 'Deactive account', link: 'deactive-account', mode: 'deactivate'}
    ];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private privacyService: PrivacyService) {
    }

    ngOnInit() {
    }

    onClick(item) {
        this.privacyService.mode = item.mode;
        this.router.navigate(['./privacy/' + item.link]);
    }
}
