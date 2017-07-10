import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AddSkill } from './add-skill/add-skill';

/**
 * Generated class for the MySkill page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-skill',
  templateUrl: 'my-skill.html',
})
export class MySkill {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySkill');
  }
  goAddSkill(){
  	this.navCtrl.push(AddSkill);
  }

}
