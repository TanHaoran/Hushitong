import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CalendarController} from "ion2-calendar/dist";

/**
 * Generated class for the Work page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class Work {

  constructor(public navCtrl: NavController, public navParams: NavParams,public calendarCtrl: CalendarController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Work');
  }

  openCalendar(){
  	this.calendarCtrl.openCalendar({
  		from:new Date()
  	})
  	.then( res => { console.log(res) } );

  }

}
