import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { ExamAppointment } from '../exam/exam-appointment/exam-appointment';

/**
 * Generated class for the Exam page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class Exam {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exam');
  }

  goExamAppointment(){
  	this.navCtrl.push(ExamAppointment);
  }

}
