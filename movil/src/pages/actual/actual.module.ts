import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActualPage } from './actual';

@NgModule({
  declarations: [
    ActualPage,
  ],
  imports: [
    IonicPageModule.forChild(ActualPage),
  ],
})
export class ActualPageModule {}
