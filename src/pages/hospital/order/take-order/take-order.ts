import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderDetail } from '../order-detail/order-detail';

/**
 * Generated class for the TakeOrder page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-take-order',
  templateUrl: 'take-order.html',
})
export class TakeOrder {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeOrder');
  }
  goOrderDetail(){
  	this.navCtrl.push(OrderDetail);
  }

}
