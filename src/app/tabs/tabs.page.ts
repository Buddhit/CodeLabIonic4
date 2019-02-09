import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  menuItems: any = [];
  constructor(){
    this.menuItems = [
      {'name': 'home', 'id': 'tab1', 'label': 'Home'},
      {'name': 'search', 'id': 'tab2', 'label': 'Search'},
      {'name': 'person', 'id': 'profile', 'label': 'Profile'}
    ]
  }

}
