import { Component } from '@angular/core';
import {  NavController, NavParams ,App} from 'ionic-angular';

import { Exam } from '../hospital/exam/exam';
import { Score } from '../hospital/score/score';
import { Work } from '../hospital/work/work';
import { Order } from '../hospital/order/order';
import {Blsj} from "../jumpPages/blsj/blsj";
import {NurseClass} from "../jumpPages/nurse-class/nurse-class";

/**
 * Generated class for the Hospital page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class Hospital {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hospital');
  }

  goExam(){
  	this.navCtrl.push(Exam);
  }

  goScore(){
  	this.navCtrl.push(Score);
  }

  goWork(){
  	this.navCtrl.push(Work);
  }

  goOrder(){
  this.navCtrl.push(Order);
  }
  goBlsj(){
    this.app.getRootNav().push(Blsj);
  }
  goNurseClass(){
    this.app.getRootNav().push(NurseClass);
  }
}
