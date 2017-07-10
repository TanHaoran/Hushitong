import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Login } from '../../../pages/common/login/login';
import { AlertPage } from '../../../pages/common/alert-page/alert-page';
import { TakeOrder } from './take-order/take-order';
import { Myorder } from './myorder/myorder';

import { OrderDetail } from './order-detail/order-detail';
import { Publish } from '../../../pages/about/publish/publish';

/**
 * Generated class for the Order page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class Order {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order');
  }

    goAlertPage(){
  	this.navCtrl.push(AlertPage);
  }
  goTakeOrder(){
  	this.navCtrl.push(TakeOrder);
  }
  goOrderDetail(){
    this.navCtrl.push(OrderDetail);
  }
  goMyOrder(){
    this.navCtrl.push(Myorder);
  }
  goPublish(){
    this.navCtrl.push(Publish);
  }

}
