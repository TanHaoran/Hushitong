import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TakeorderSuccess } from '../takeorder-success/takeorder-success';

/**
 * Generated class for the OrderDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetail');
  }
  goTakeOrderSuccess(){
  	this.navCtrl.push(TakeorderSuccess);
  }

}
