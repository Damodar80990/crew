import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { homeComponent } from '../pages/home/home.component';
import { listComponent } from '../pages/list/list.component';
//import { laborComponent } from '../pages/labor/labor.component';
//import { projectDetailsComponent } from '../pages/project-details/project-details.component';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = homeComponent;
  //rootPage: any = projectDetailsComponent;
  appMenuItems: Array<MenuItem>;
  accountMenuItems: Array<MenuItem>;
  helpMenuItems: Array<MenuItem>;
  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Projects', component: listComponent, icon: 'paper'},
      {title: 'Employees', component: listComponent, icon: 'people'},
      {title: 'Time Cards', component: homeComponent, icon: 'grid'},
      {title: 'Timeoff', component: homeComponent, icon: 'clock'},
      {title: 'Notifications', component: listComponent, icon: 'notifications'},
      {title: 'Reports', component: homeComponent, icon: 'analytics'},
      {title: 'Settings', component: homeComponent, icon: 'cog'},
      {title: 'About', component: homeComponent, icon: 'information-circle'},
      {title: 'Help', component: homeComponent, icon: 'call'},
      {title: 'Logout', component: homeComponent, icon: 'log-out'},
    ];

    // this.accountMenuItems = [
    //     {title: 'My Account', component: homeComponent, icon: 'ios-contact'},
    //     {title: 'Logout', component: homeComponent, icon: 'log-out'},
    // ];

    // this.helpMenuItems = [
    //     {title: 'Assistance', component: homeComponent, icon: 'call'},
    //     {title: 'About', component: homeComponent, icon: 'globe'},
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
