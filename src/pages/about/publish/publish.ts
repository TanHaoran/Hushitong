import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Publish page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class Publish {
	public serviceList:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Publish');
  }
  addService(val){
  	let service = {
  		name: val,
  		price: 200
  	};
  	this.serviceList.push(service);
  }

}
