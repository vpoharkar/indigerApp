import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'seedApp';

  navLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {

    this.navLinks = [
      {
          label: 'Home',
          link: './home',
          index: 0
      }, {
          label: 'Add-new-employee',
          link: './add-new-employee',
          index: 1
      } 
  ];
  }

  public ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  }); 
  }
 
}
