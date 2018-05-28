import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {UtilitiesProvider} from "../../providers/utilities/utilities";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public util: UtilitiesProvider
    ) {
  }

  ionViewDidLoad() {
    this.slides.autoplay = 0;
    this.slides.loop = true;
    this.slides.speed = 1500;
    this.slides.effect = ''
  }
}


