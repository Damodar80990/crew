import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTimePage } from './my-time';

@NgModule({
  declarations: [
    MyTimePage,
  ],
  imports: [
    IonicPageModule.forChild(MyTimePage),
  ],
})
export class MyTimePageModule {}
