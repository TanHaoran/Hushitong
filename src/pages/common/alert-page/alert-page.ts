import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyCertificate } from '../../about/my-certificate/my-certificate';

/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-alert-page',
  templateUrl: 'alert-page.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  goCertificate(){
  	this.navCtrl.push(MyCertificate);
  }

}
