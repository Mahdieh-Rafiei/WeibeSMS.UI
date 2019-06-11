import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu: string;
  subMenuIcon: boolean = false;

  menuItems = [
    {
      title: 'Hi IPE',
      icon: 'user',
      link: null,
      subMenu: [
        {
          title: 'Privacy',
          icon: 'circle',
          link: '/privacy'
        }, {
          title: 'Profile',
          icon: 'circle',
          link: '/profile'
        }, {
          title: 'Point',
          icon: 'circle',
          link: '/reward-point'
        }
      ]
    }, {
      title: 'Dashboard',
      icon: 'home',
      link: '/',
      subMenu: null
    }, {
      title: 'Contacts',
      icon: 'address-book',
      link: '/group/list',
      subMenu: null
    }, {
      title: 'Send',
      icon: 'envelope',
      link: null,
      subMenu: [{
        title: 'Simple',
        icon: 'circle',
        link: '/send-message'
      },
        {
          title: 'Schedule',
          icon: 'circle',
          link: '/send-message'
        }, {
          title: 'Event base',
          icon: 'circle',
          link: '/send-message'
        }]
    }, {
      title: 'Option',
      icon: 'cog',
      link: null,
      subMenu: [{
        title: 'Template',
        icon: 'circle',
        link: '/draft/list'
      },
        {
          title: 'schedule,events',
          icon: 'circle',
          link: '/definition-schedule-event'
        }, {
          title: 'event_field',
          icon: 'circle',
          link: '/user-event'
        }]
    }, {
      title: 'Reports',
      icon: 'chart-bar',
      link: 'sms-report/list',
      subMenu: null
    }, {
      title: 'Verification',
      icon: 'check-square',
      link: '/sms-report/verification-code',
      subMenu: null
    }, {
      title: 'Billing',
      icon: 'money-bill',
      link: '/billing',
      subMenu: null
    }, {
      title: 'Add fund',
      icon: 'dollar-sign',
      link: '/fund-list',
      subMenu: null
    }, {
      title: 'Support',
      icon: 'phone-square',
      link: '/ticket/list',
      subMenu: null
    }, {
      title: 'Developer',
      icon: 'code',
      link: '/developer/list',
      subMenu: null
    }, {
      title: 'Lines',
      icon: 'shopping-basket',
      link: '/lines/my-lines',
      subMenu: null
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.showMenu = '';
  }

  // subMenu
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.subMenuIcon = false;
      this.showMenu = '0';
    } else {
      this.showMenu = element;
      this.subMenuIcon = true;
    }
  }

  navigateRoute(link) {
    this.subMenuIcon = false;
    this.showMenu = '';
    this.router.navigate(['./' + link]);
  }
}
