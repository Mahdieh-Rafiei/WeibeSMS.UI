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
      subMenu: [{
        title: 'Privacy',
        icon: 'circle',
        link: '/privacy'
      }]
    }, {
      title: 'Dashboard',
      icon: 'home',
      link: 'index',
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
    this.subMenuIcon = true;
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  navigateRoute(link) {
    this.subMenuIcon = false;
    this.showMenu = '';
    this.router.navigate(['./' + link]);
  }
}
