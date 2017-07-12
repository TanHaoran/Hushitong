import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { Chat } from "../../chat/chat";
/**
 * Generated class for the NurseTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurse-team',
  templateUrl: 'nurse-team.html',
})
export class NurseTeamPage {
  toUser:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'喵喵'
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NurseTeamPage');
  }

  goChat(){
    this.app.getRootNav().push(Chat,this.toUser);
  }

}
