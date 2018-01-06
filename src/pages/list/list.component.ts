import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { projectDetailsComponent } from '../project-details/project-details.component';

export interface projectItems {
  title: string;
  sitelocation: string;
  code: string;
  thumbnail: string;
  id: string;
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class listComponent {

  projectList: Array<projectItems>;
  searchKey: string = "";
  viewMode: string = "list";

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.projectList = [
      { title: 'Bridge Construction', sitelocation: 'US', code: 'US-005', thumbnail: 'site4.png', id: 'pr001' },
      { title: 'Transmition', sitelocation: 'INDIA', code: 'IN-004', thumbnail: 'site3.jpg', id: 'pr002' },
      { title: 'Transportation', sitelocation: 'INDIA', code: 'IT-001', thumbnail: 'site1.jpg', id: 'pr003' },
      { title: 'Fiber Optics', sitelocation: 'US', code: 'US-001', thumbnail: 'site2.jpg', id: 'pr004' }
    ]

    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(projectDetailsComponent, {
  //     item: item
  //   });
  // }

  openProjectDetails(project: any) {
    this.navCtrl.push(projectDetailsComponent, project);
  }

  deleteItem(project: any) {
    //alert("Delete");
  }

}
