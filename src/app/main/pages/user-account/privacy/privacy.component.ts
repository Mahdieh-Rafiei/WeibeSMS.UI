import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  items = [
    {title: 'Change password', link: 'change-password'},
    {title: 'Login log', link: 'login-log'},
    {title: 'Deactive account', link: 'deactive-account'}
  ];

  active: string = null;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick(link) {
    this.active = link;
    this.router.navigate(['./privacy/' + link]);

  }
}
