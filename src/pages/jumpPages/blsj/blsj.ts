import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import * as interfaceConfig from '../../../appConfig/interfaceConfig';

/**
 * Generated class for the Blsj page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-blsj',
  templateUrl: 'blsj.html',
})
export class Blsj {
  public	secUrl:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public sanitizer: DomSanitizer) {
  	this.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(interfaceConfig.BLSJ);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Blsj');
  }

}
