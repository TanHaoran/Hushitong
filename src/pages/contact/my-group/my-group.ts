import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { Chat } from "../chat/chat";

/**
 * Generated class for the MyGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-group',
  templateUrl: 'my-group.html',
})
export class MyGroupPage {
  toUser:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'交大一附院护理部'
    }
  }

  goChat(){
  this.app.getRootNav().push(Chat,this.toUser);
}


}
