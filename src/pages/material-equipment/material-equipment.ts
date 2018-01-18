import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialEquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-equipment',
  templateUrl: 'material-equipment.html',
})
export class MaterialEquipmentComponent {

  meFlag: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.meFlag = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialEquipmentPage');
  }

}
