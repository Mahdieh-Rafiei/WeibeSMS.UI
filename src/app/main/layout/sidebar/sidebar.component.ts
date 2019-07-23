import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../shared/service/data.service';
import {ConfigService} from '../../../shared/config.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {SharedService} from '../../../shared/service/shared.service';
import {UserAccountService} from '../../pages/user-account/user-account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  showMenu: string;
  expandPanel: string;
  menuItems = [
    {
      title: 'Hi IPE',
      icon: 'user',
      link: null,
      subMenu: [
        {
          title: 'Privacy',
          icon: 'circle',
          link: '/privacy/change-password'
        }, {
          title: 'Profile',
          icon: 'circle',
          link: '/profile/info'
        },
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
        link: '/send-message/first-step'
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
      link: '/billing/invoice-list',
      subMenu: null
    }, {
      title: 'Add fund',
      icon: 'dollar-sign',
      link: '/add-fund/list',
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
  activeRoute: string;


  constructor(private router: Router,
              private ds: DataService,
              private route: ActivatedRoute,
              private configService: ConfigService,
              private sharedService: SharedService,
              private userAccountService: UserAccountService) {
    this.navigateRoute(window.location.pathname);
    this.menuItems.forEach(item => {
        if (item.subMenu) {
          item.subMenu.forEach(res => {
            if (res.link === window.location.pathname) {
              this.addExpandClass(item.title);
            }
          });
        }
      }
    );
  }

  ngOnInit() {
    this.showMenu = '';
    this.setFirstName();
    this.userAccountService.firstNameChanged.subscribe(res => {
      this.setFirstName();
    });
  }

  // subMenu
  addExpandClass(title: any) {
    this.expandPanel = title;
    this.activeRoute = '';
    if (title === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = title;
    }
  }

  navigateRoute(link: string) {
    this.expandPanel = '';
    this.activeRoute = link;
    this.showMenu = '';
    this.router.navigate(['./' + link]);
  }

  mouseLeave() {
    if (this.ds.showSideBar) {
      this.configService.sidebarMode = this.configService.sidebarMode == 'default' ? 'slim' : 'default';
      this.ds.showSideBar = false;
    }
  }

  setFirstName() {
    this.menuItems[0].title = `Hi ${this.sharedService.getCurrentUserInfo().firstName.length > 10 ?
      `${this.sharedService.getCurrentUserInfo().firstName.substring(0, 6)} ...` : this.sharedService.getCurrentUserInfo().firstName}`;
  }
}
