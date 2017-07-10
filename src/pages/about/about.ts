import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Setup } from '../../pages/common/setup/setup';
import { MySkill } from './my-skill/my-skill';
import { MyCertificate } from './my-certificate/my-certificate';
import { MyBill } from './my-bill/my-bill';
import { MyDetailPagePage } from './my-detail-page/my-detail-page';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goSetUp() {
  this.navCtrl.push(Setup);
  }
  goMySkill() {
  this.navCtrl.push(MySkill);
  }
  goMyCertificate() {
  this.navCtrl.push(MyCertificate);
   }
  goMyBill() {
    this.navCtrl.push(MyBill);
  }
  goMyDetail() {
    this.navCtrl.push(MyDetailPagePage);
  }

}
