import {Component, ViewChild} from '@angular/core';
import {NavController, App, Slides} from 'ionic-angular';

import {Blsj} from '../jumpPages/blsj/blsj';
import {NurseClass} from '../jumpPages/nurse-class/nurse-class';
import {Score} from '../hospital/score/score';
// import {Chat} from '../../pages/contact/chat/chat';
import {Notice} from '../../pages/common/notice/notice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toUser: Object;
  @ViewChild('mainSlide') mainSlides: Slides;
  @ViewChild('noticeSlide') noticeSlides: Slides;

  constructor(public navCtrl: NavController, private app: App) {
    this.toUser = {
      toUserId: '210000198410281948',
      toUserName: '喵喵'
    }


  }

  ionViewDidEnter() {
    // this.mainSlides.update();
    this.mainSlides.autoplayDisableOnInteraction = false;
    this.mainSlides.autoplay = 1;
    // this.mainSlides.startAutoplay();
    // this.mainSlides.slideTo(2, 500);
    setInterval(() => {
      this.mainSlides.slideNext(500);
    }, 5500);

    this.noticeSlides.startAutoplay();
    this.noticeSlides.autoplayDisableOnInteraction = false;
  }

  ionViewDidLeave() {
    this.mainSlides.stopAutoplay();
    this.noticeSlides.stopAutoplay();
  }

  goBlsj() {
    this.app.getRootNav().push(Blsj);
  }

  goNurseClass() {
    this.app.getRootNav().push(NurseClass);
  }

  goScore() {
    this.navCtrl.push(Score);
  }

  goContact() {
    this.navCtrl.parent.select(1);
  }

  goChat():void {
    this.app.getRootNav().push('Chat', this.toUser);
  }

  goNotice() {
    this.app.getRootNav().push(Notice);
  }

}
