import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ExamDetail } from '../exam-appointment/exam-detail/exam-detail';

/**
 * Generated class for the ExamAppointment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exam-appointment',
  templateUrl: 'exam-appointment.html',
})
export class ExamAppointment {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamAppointment');
  }

  goExamDetail(){
  	this.navCtrl.push(ExamDetail);
  }

}
