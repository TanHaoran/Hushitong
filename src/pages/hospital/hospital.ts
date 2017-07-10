import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { Exam } from '../hospital/exam/exam';
import { Score } from '../hospital/score/score';
import { Work } from '../hospital/work/work';
import { HuTalk } from '../hospital/hu-talk/hu-talk';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  goHuTalk(){
  	this.navCtrl.push(HuTalk);
  }
}
