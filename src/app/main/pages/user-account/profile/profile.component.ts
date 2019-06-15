import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  items = [
    {title: 'Profile', link: 'info'},
    {title: 'Change number', link: 'change-number'},
    {title: 'Change email', link: 'change-email'},
    {title: 'Sender id', link: 'sender-id'},
  ];

  active: string = null;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.onClick('info');

  }

  onClick(link) {
    this.active = link;
    this.router.navigateByUrl(`profile/${link}`);

  }

}
