import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { AddCertificate } from './add-certificate/add-certificate';

/**
 * Generated class for the MyCertificate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-certificate',
  templateUrl: 'my-certificate.html',
})
export class MyCertificate {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCertificate');
  }
  goAddCertificate(){
  	this.navCtrl.push(AddCertificate);
  }

}
