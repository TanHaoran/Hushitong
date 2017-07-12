import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NurseTeamPage } from './nurse-team/nurse-team';

/**
 * Generated class for the MyOrganizationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-organization',
  templateUrl: 'my-organization.html',
})
export class MyOrganizationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyOrganizationPage');
  }

  goNurseTeam(){
   this.navCtrl.push(NurseTeamPage);
  }

  goNeuroTeam(){
    // this.navCtrl.push(NurseTeamPage);
  }

  goSurgery(){
    // this.navCtrl.push(NurseTeamPage);
  }

}
