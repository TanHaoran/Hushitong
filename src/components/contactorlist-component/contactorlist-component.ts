import { Component } from '@angular/core';

import {NavController,App} from 'ionic-angular';

import { Chat } from '../../pages/contact/chat/chat';

/**
 * Generated class for the ContactorlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contactorlist-component',
  templateUrl: 'contactorlist-component.html'
})
export class ContactorlistComponent {

    toUser:Object;

  constructor(public navCtrl: NavController,private app:App) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'喵喵'
    }
  }
  goChat(){
  	this.app.getRootNav().push(Chat,this.toUser);
  }
}
