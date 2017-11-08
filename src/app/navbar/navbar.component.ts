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
      { label: 'Home', icon: 'fa fa-home', routerLink: ['/home'] },
      { label: 'Todo App', icon: 'fa fa-sticky-note', routerLink: ['/todoapp'] },
      { label: 'Go Team App', icon: 'fa-soccer-ball-o', routerLink: ['/goteamapp'] },
      { label: 'Contact Simon', icon: 'fa-phone', routerLink: ['/contact'] },
      { label: 'Simon\'s Github', icon: 'fa-github-square', url: 'https://simonhlee97.github.io' },
      { label: 'Simon\'s Twitter', icon: 'fa-twitter', url: 'https://twitter.com/simonhlee97' }
    ];
  }
}
