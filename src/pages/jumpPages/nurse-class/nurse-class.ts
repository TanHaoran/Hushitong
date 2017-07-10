import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import * as interfaceConfig from '../../../appConfig/interfaceConfig';

/**
 * Generated class for the NurseClass page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nurse-class',
  templateUrl: 'nurse-class.html',
})
export class NurseClass {
	public	secUrl:any = this.sanitizer.bypassSecurityTrustResourceUrl(interfaceConfig.NURSE_CLASS); ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseClass');
  }

}
