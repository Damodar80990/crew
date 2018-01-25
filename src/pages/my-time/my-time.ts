import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


/**
 * Generated class for the MyTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myTime'
})
@Component({
  selector: 'page-my-time',
  templateUrl: 'my-time.html',
})
export class MyTimePage {
  @ViewChild(Nav) nav: Nav;
  openTabContent: string = 'E';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTimePage');
  }
  openTabs(tab: string) {
    console.log(tab)
    this.openTabContent = tab;
  }
  doneEvent(){
    alert("Done");
    this.nav.pop();
    //console.log("Go back page")
  }
  startClockPage(){
    alert("clock");
    this.nav.push('clockPage');
    //console.log("Go back page")
  }
}
