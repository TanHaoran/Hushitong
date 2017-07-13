import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Setup} from '../../pages/common/setup/setup';
import {MySkill} from './my-skill/my-skill';
import {MyCertificate} from './my-certificate/my-certificate';
import {MyBill} from './my-bill/my-bill';
import {MyDetailPagePage} from './my-detail-page/my-detail-page';
import {FeedBackPage} from "./feed-back/feed-back";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * 设置
   */
  goSetUp() {
    this.navCtrl.push(Setup);
  }

  goMySkill() {
    this.navCtrl.push(MySkill);
  }

  /**
   * 我的认证
   */
  goMyCertificate() {
    this.navCtrl.push(MyCertificate);
  }

  goMyBill() {
    this.navCtrl.push(MyBill);
  }

  /**
   * 个人资料
   */
  goMyDetail() {
    this.navCtrl.push(MyDetailPagePage);
  }

  /**
   * 问题反馈
   */
  goFeedback() {
    this.navCtrl.push(FeedBackPage);
  }


}
