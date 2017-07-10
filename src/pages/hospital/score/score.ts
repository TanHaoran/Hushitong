import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { Scoredetail } from './scoredetail/scoredetail';

/**
 * Generated class for the Score page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class Score {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Score');
  }

  goScoreDetail(){
  	this.navCtrl.push(Scoredetail);
  }

}
