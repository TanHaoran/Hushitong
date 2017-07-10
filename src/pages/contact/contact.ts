import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../../pages/common/login/login';
import { AlertPage } from '../../pages/common/alert-page/alert-page';
import { TakeOrder } from './take-order/take-order';
import { Myorder } from './myorder/myorder';

import { OrderDetail } from './order-detail/order-detail';
import { Publish } from '../../pages/about/publish/publish';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  	// this.navCtrl.push(Login);
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
