import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialEquipmentComponent } from './material-equipment';

@NgModule({
  declarations: [
    MaterialEquipmentComponent,
  ],
  imports: [
    IonicPageModule.forChild(MaterialEquipmentComponent),
  ],
})
export class MaterialEquipmentModule {}
