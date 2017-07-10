import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController,AlertController } from 'ionic-angular';

import * as interfaceConfig from '../../../appConfig/interfaceConfig';

import { Myorder } from '../../../pages/hospital/order/myorder/myorder';

/**
 * Generated class for the Certificate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-certificate',
  templateUrl: 'certificate.html',
})
export class Certificate {
    details:any = {
    realName:'',
    id:'',
    careerid:'',
    careerDate:'',
    CertificatePhoto:'',
    CertificateName:''
  };
  uploadurl:string = interfaceConfig.IMG_HANDLER;
  status:any = {
    ok:'已提交',
    1:'待审核',
    2:'已审核',
    3:'已拒绝'
  };
  idstatus:string = '';
  disableId:boolean = false;
  professionStatus:string = '';
  disablePro:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Certificate');
  }
  goMyorder(){
  	// this.navCtrl.popToRoot();
    this.navCtrl.push(Myorder);
  }
  changeInput(fieldTitle,val) {
    let alert = this.alertCtrl.create({
      title: fieldTitle,
      inputs: [
      {
        name: val,
        placeholder: fieldTitle
      }
      ],
      buttons: [
      {
        text: '取消',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: '确定',
        handler: data => {
          // this.details[val] = data[val];
        }
      }
      ]
    });
    alert.present();
  }

  showToast(msg,pos){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: pos
    });
    toast.present();
  }

  imageUploaded(e){
    if(e && e.serverResponse._body.length> 0){
      this.details.CertificatePhoto = e.serverResponse.text();
    }
    console.log(e);
  }  

}
