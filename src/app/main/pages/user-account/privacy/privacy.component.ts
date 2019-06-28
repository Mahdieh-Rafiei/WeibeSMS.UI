import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivacyService} from './privacy.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit, AfterViewChecked {

  items = [
    {title: 'Change password', link: 'change-password', mode: 'changePassword'},
    {title: 'Login log', link: 'login-log', mode: 'loginLog'},
    {title: 'Deactivate account', link: 'deactive-account', mode: 'deactivate'}
  ];

  constructor(private router: Router,
              private privacyService: PrivacyService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
  onClick(item) {
    this.privacyService.mode = item.mode;
    this.router.navigate(['./privacy/' + item.link]);

  }
}
