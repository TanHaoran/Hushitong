import {Component} from '@angular/core';
import {
  NavController, NavParams, AlertController, ToastController, ActionSheetController,
  Platform
} from 'ionic-angular';
import {NicknamePage} from "./nickname/nickname";
// import { DomSanitizer } from '@angular/platform-browser';
// import { Http,RequestOptions,Headers } from '@angular/http';


// import * as interfaceConfig from '../../../appConfig/interfaceConfig';

// import { CourseService } from '../../../providers/course/CourseService';
// import { CommonService } from '../../../providers/common/CommonService';
// import { Localstorage } from '../../../providers/common/LocalStorage';
// import { CommonCheck } from '../../../providers/common/CommonCheck';

@Component({
  selector: 'page-my-detail-page',
  templateUrl: 'my-detail-page.html'
})
export class MyDetailPagePage {
  details: any = {
    gender: {},
    hosp: {},
    hospDep: {},
    nickName: "昵称",
    phone: "电话",
    mail: "mail",
    headImg: "assets/icon/2017-05-13 212002.jpg",
    position: "",
    address: "",
    imgUrl: "assets/icon/2017-05-13 212002.jpg"
  };
  postData: any = {};
  stateCode: any = {};
  hosptials: any = {};
  address: any = [];
  myDetails: any = {};
  hospDep: any = [];
  imgbase64: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public platform: Platform,
              public actionsheetCtrl: ActionSheetController) {
    // this.getStatecode();
    // this.getHospital();
    // this.getUserByRUid();
  }

  changeImg() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '修改头像',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '拍摄',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera' : null,
          handler: () => {
            console.log('take photo clicked');
          }
        },
        {
          text: '从手机相册选取',
          icon: !this.platform.is('ios') ? 'ios-image' : null,
          handler: () => {
            console.log('select photo clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  goNickname() {
    this.navCtrl.push(NicknamePage);
  }


  // ionViewDidLoad() {

  // }
  // changeInput(fieldTitle,val) {
  // 	let alert = this.alertCtrl.create({
  // 		title: fieldTitle,
  // 		inputs: [
  // 		{
  // 			name: val,
  // 			placeholder: fieldTitle
  // 		}
  // 		],
  // 		buttons: [
  // 		{
  // 			text: '取消',
  // 			role: 'cancel',
  // 			handler: data => {
  // 				console.log('Cancel clicked');
  // 			}
  // 		},
  // 		{
  // 			text: '确定',
  // 			handler: data => {
  // 				this.details[val] = data[val];
  // 			}
  // 		}
  // 		]
  // 	});
  // 	alert.present();
  // }
  // changeImg(e){
  // 	if(!e.target.files[0]){
  // 		this.showToast('图片加载出错,请重新选择','middle');
  // 		return;
  // 	}
  // 	var filecheck = this.commonCheck.uploadImgcheck(e.target.files[0]);
  // 	if(filecheck == "sizeOver"){
  // 		this.showToast('请上传10M以内的图片','middle');
  // 		return;
  // 	}

  // 	if(filecheck == "picwrong"){
  // 		this.showToast('图片格式不正确','middle');
  // 		return;
  // 	}

  // 	var url = window.URL.createObjectURL(e.target.files[0]);
  // 	this.details.imgUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);

  // 	let fileList: FileList = e.target.files;
  // 	if (fileList.length > 0) {
  // 		let file: File = fileList[0];
  // 		let formData: FormData = new FormData();
  // 		formData.append('fileToUpload', file);

  // 		let headers = new Headers()
  // 		headers.append('Accept', '*/*');
  // 		let options = new RequestOptions({ headers: headers });
  // 		this.courseService.imgHandler(formData,options).subscribe((data:any) => {
  // 			this.postData.HeadImg = data.text();
  // 		});

  // 	}

  // }


  // getStatecode(){
  // 	this.courseService.getStatecode().subscribe((data:any) => {
  // 		data.map((item) => {
  // 			if(item.Classify !== null){
  // 				if(!this.stateCode[item.Classify]){
  // 					this.stateCode[item.Classify] = [];
  // 					this.stateCode[item.Classify].push(item);
  // 				}else {
  // 					this.stateCode[item.Classify].push(item);
  // 				}
  // 			}

  // 		});

  // 	});
  // }

  // getHospital(){
  // 	this.courseService.getHospital({
  // 		Region:""
  // 	}).subscribe((data:any) => {
  // 		data.map((item)=>{
  // 			if(!this.hosptials[item.Address]){
  // 				this.address.push(item.Address);
  // 				this.hosptials[item.Address] = [];
  // 				this.hosptials[item.Address].push(item);
  // 			}else{
  // 				this.hosptials[item.Address].push(item);
  // 			}
  // 		});
  // 		// console.log(this.address);
  // 		// console.log(this.hosptials);
  // 	});
  // }

  // getHospdepByHospId(hpId){
  // 	this.courseService.getHospdepByHospId({
  // 		HospId:hpId
  // 	}).subscribe((data:any) => {
  // 		this.hospDep = data;
  // 	});
  // }

  // getUserByRUid(){
  // 	this.courseService.getUserByRUid({
  // 		rud:this.commonService.currentUser.ReUId
  // 	}).subscribe((data:any) => {
  // 		this.postData = data;
  // 		// console.log(this.postData);
  // 		if(data.HeadImg !== null){
  // 			this.details.imgUrl = data.imgUrl;
  // 		}
  // 		this.details.nickName = data.Name;
  // 		this.details.gender = data.Sex;
  // 		this.details.hospDep = data.DepId;
  // 		this.details.position = data.Position;
  // 		this.details.phone = data.Phone;
  // 		this.details.address = data.HospAddress;
  // 		this.getHospdepByHospId(data.HospId);
  // 		this.details.hosp = data.HospId;
  // 		this.details.hospDep = data.DepId;
  // 		});
  // }

  // showToast(msg,pos){
  // 	let toast = this.toastCtrl.create({
  // 		message: msg,
  // 		duration: 1000,
  // 		position: pos
  // 	});
  // 	toast.present();
  // }


  // updateUser(){
  // 	if(this.commonCheck.isNull(this.details.hospDep)){
  // 		this.showToast('请选择科室','middle');
  // 		return;
  // 	}
  // 	if(this.commonCheck.isNull(this.details.position)){
  // 		this.showToast('请选择职称','middle');
  // 		return;
  // 	}
  // 	if(!this.commonCheck.isMinAndMaxStr(this.details.nickName,2,10) || !this.commonCheck.isRealName(this.details.nickName)){
  // 		this.showToast('姓名请输入2-10个汉字','middle');
  // 		return;
  // 	}

  // 	// if(this.commonCheck.isNull(this.details.phone)){
  // 	// 	this.showToast('电话号码不能为空','middle');
  // 	// 	return;
  // 	// }
  // 	if(!this.commonCheck.isNull(this.details.phone) &&!this.commonCheck.isPhone(this.details.phone)){
  // 		this.showToast('电话号码格式不正确','middle');
  // 		return;
  // 	}
  //     this.postData.Name  = this.details.nickName ;
  //     this.postData.Sex  = this.details.gender ;
  //     this.postData.DepId  = this.details.hospDep ;
  //     this.postData.Position  = this.details.position ;
  //     this.postData.Phone  = this.details.phone ;
  // 	console.log(this.postData);
  // 	this.courseService.updateUser({model: this.postData}).subscribe((data:any) => {
  // 		let toast = this.toastCtrl.create({
  // 			message: '已更新',
  // 			duration: 500,
  // 			position: 'middle'
  // 		});
  // 		toast.present();
  // 		if(this.postData.HeadImg !== null){
  // 			this.postData.imgUrl = interfaceConfig.base+ '/FX/'+this.postData.HeadImg;
  // 		}

  // 		this.localstorage.setItem('userdetail_buzzly_nurse_train',JSON.stringify(this.postData));
  // 		this.commonService.currentDetails = this.postData;
  // 	}, err =>{
  // 		alert('err');
  // 	});
  // }

  // goCertificate(){
  // 	this.navCtrl.push(CertificatePage);
  // }

}


