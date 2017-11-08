import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Todo App', icon: 'fa-bar-chart', routerLink: ['/todoapp'] },
      { label: 'Go Team App', icon: 'fa-calendar', routerLink: ['/goteamapp'] },
      { label: 'Contact Simon', icon: 'fa-book' },
      { label: 'Simon\'s Github', icon: 'fa-support', url: 'https://simonhlee97.github.io' },
      { label: 'Simon\'s Twitter', icon: 'fa-twitter', url: 'https://twitter.com/simonhlee97' }
    ];
  }

}
