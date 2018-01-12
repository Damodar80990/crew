import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { loginComponent } from '../login/login.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class homeComponent {
  @ViewChild(Slides) slide: Slides; 
  currentIndex: number = 0;
  constructor(public navCtrl: NavController) {
  
  }

  leaveIntro() {
    //this.app.getRootNav().push(loginComponent);
    this.navCtrl.push(loginComponent)
  }

  slides = [
    {
      title: "dasdsdasd",
      description: "Increase Productivity with CREW App. Daily Construction Reporting. Save Time on the Job.",
      descriptionOnTop: "",
      image: "site.jpg",
      cssClass: ""
    },
    {
      title: "",
      description: "PDF Daily Reports.",
      descriptionOnTop: "",
      image: "track.jpg",
      cssClass: ""
    },
    {
      title: "Know Before You Buy",
      description: "Keep track of your favorites and get notified in real time.",
      descriptionOnTop: "",
      image: "construction1.jpg",
      cssClass: ""
    },
    ];

  slideChanged() {
    this.currentIndex = this.slide.getActiveIndex();
  }

  nextSlide(){
    if(this.currentIndex < 2) {
      this.slide.slideTo(this.currentIndex + 1, 2);
    }else{
      this.leaveIntro();
    }
  }

}
