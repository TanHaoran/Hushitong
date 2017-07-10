import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TakeorderSuccess } from '../takeorder-success/takeorder-success';

/**
 * Generated class for the Myorder page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class Myorder {
  dws: string = "all";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myorder');
  }
  goTakeOrderSuccess(){
  	this.navCtrl.push(TakeorderSuccess);
  }

}
