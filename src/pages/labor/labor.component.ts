import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'labor',
    templateUrl: 'labor.html'
})
export class laborComponent {
    constructor(public navParams: NavParams) {
        let data = this.navParams.data;
        console.log(data)
    }
}