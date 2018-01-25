import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { homeComponent } from '../pages/home/home.component';
import { listComponent } from '../pages/list/list.component';
import { laborComponent } from '../pages/labor/labor.component';
import { projectDetailsComponent } from '../pages/project-details/project-details.component';
import { takeUntil } from 'rxjs/operator/takeUntil';
//import { MaterialEquipmentComponent } from './../pages/material-equipment/material-equipment';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
  loadComponent: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'clockPage';//homeComponent;
  //rootPage: any = MaterialEquipmentComponent; //laborComponent;
  appMenuItems: Array<MenuItem>;
  accountMenuItems: Array<MenuItem>;
  helpMenuItems: Array<MenuItem>;
  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.appMenuItems = [
      { title: 'Projects', component: listComponent, icon: 'paper', loadComponent: '' },
      { title: 'Employees', component: listComponent, icon: 'people', loadComponent: '' },
      { title: 'Time Cards', component: homeComponent, icon: 'grid', loadComponent: 'myTime' },
      { title: 'Timeoff', component: homeComponent, icon: 'clock', loadComponent: 'clockPage' },
      { title: 'Notifications', component: listComponent, icon: 'notifications', loadComponent: '' },
      { title: 'Reports', component: homeComponent, icon: 'analytics', loadComponent: '' },
      { title: 'Settings', component: homeComponent, icon: 'cog', loadComponent: '' },
      { title: 'About', component: homeComponent, icon: 'information-circle', loadComponent: '' },
      { title: 'Help', component: homeComponent, icon: 'call', loadComponent: '' },
      { title: 'Logout', component: homeComponent, icon: 'log-out', loadComponent: '' },
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
    
    if (page.loadComponent == '') {
      this.nav.setRoot(page.component);
    } else { 
      this.nav.push(page.loadComponent);
    }
  }
}
