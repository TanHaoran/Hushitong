import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../../pages/tabs/tabs';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  goToHome(){
  	this.navCtrl.setRoot(TabsPage);
  }

}
