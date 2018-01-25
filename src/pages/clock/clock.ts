import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

/**
 * Generated class for the ClockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'clockPage'
})
@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html',
})
export class ClockPage implements OnInit {

  ticks = 0;
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;
  gapSub: Subscription;
  subticks = 0;
  mainSecondsDisplay: number = 0;
  mainMinutesDisplay: number = 0;
  mainHoursDisplay: number = 0;

  gapSecondsDisplay: number = 0;
  gapMinutesDisplay: number = 0;
  gapHoursDisplay: number = 0;
  messageOnTime: string;

  isClockIn: boolean = false;
  isBreakLunch: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subticks = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClockPage');
  }
  ngOnInit() {
    this.startTime();
  }

  private startTime() {
    let timer = Observable.timer(1, 1000);
    this.sub = timer.subscribe(
      t => {
        this.ticks = t;
        this.secondsDisplay = this.getSeconds(this.ticks);
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);

        let mainClockTicks = this.subticks + this.ticks;
        this.mainSecondsDisplay = this.getSeconds(mainClockTicks);
        this.mainMinutesDisplay = this.getMinutes(mainClockTicks);
        this.mainHoursDisplay = this.getHours(mainClockTicks);
      }
    )
  }

  private startLunchBreak() {
    let timerGap = Observable.timer(1, 1000);
    this.gapSub = timerGap.subscribe(
      t => {
        this.gapSecondsDisplay = this.getSeconds(t);
        this.gapMinutesDisplay = this.getMinutes(t);
        this.gapHoursDisplay = this.getHours(t);
      }
    )
  }

  private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  private clearTime() {
    this.secondsDisplay = 0;
    this.minutesDisplay = 0;
    this.hoursDisplay = 0;
  }

  private clearGapTime() {
    this.gapSecondsDisplay = 0;
    this.gapMinutesDisplay = 0;
    this.gapHoursDisplay = 0;
  }

  startStopClock(flg: number) {
    if (flg == 1) {
      this.startTime();
      this.isClockIn = false;
    } else {
      this.subticks = this.subticks + this.ticks;
      this.sub.unsubscribe();
      this.clearTime();
      this.isClockIn = true;
    }
  }

  startStopLunch(flg: number) {
    //this.gapSub.unsubscribe();
    if (flg == 1) {
      this.startLunchBreak();
      this.isBreakLunch = true;
      this.messageOnTime = 'LUNCH';
    } else {
      this.gapSub.unsubscribe();     
      this.clearGapTime();
      this.isBreakLunch = false;
    }
  }

  startStopBreak(flg: number) {
    //this.gapSub.unsubscribe();
    if (flg == 1) {
      this.startLunchBreak();
      this.isBreakLunch = true;
      this.messageOnTime = 'BREAK';
    } else {
      this.gapSub.unsubscribe();   
      this.clearGapTime();
      this.isBreakLunch = false;
    }
  }

}
