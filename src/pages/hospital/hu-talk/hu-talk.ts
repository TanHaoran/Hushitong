import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HuTalk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-hu-talk',
  templateUrl: 'hu-talk.html',
})
export class HuTalk {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuTalk');
  }
  goTalk(){
  	this.navCtrl.push(HuTalk);
  }

}
