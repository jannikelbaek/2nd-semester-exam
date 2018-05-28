import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {UtilitiesProvider} from "../../providers/utilities/utilities";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage
  ],
  providers: [
    UtilitiesProvider
  ]
})
export class HomePageModule {}
