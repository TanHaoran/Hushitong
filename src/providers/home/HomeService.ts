import { Injectable ,} from '@angular/core';
import { Http ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import * as interfaceConfig from '../../appConfig/interfaceConfig';
import * as systemParamConfig from '../../appConfig/systemParamConfig';
import {Observable} from 'rxjs/Rx';

import { CommonService } from '../common/CommonService';

@Injectable()
export class HomeService {
	
	constructor(public http:Http,public commonService:CommonService) {}

	transferImgUrl(data){
		return data.map((item:any)=> {
			item.imgUrl =systemParamConfig.SERVER_RES_IMG_HOME +  item.CourseThumb;
			return item;
		});
	}
	transferVideo(data){
		return data.map((item:any)=> {
			item.vodUrl =systemParamConfig.SERVER_RES_VOD_HOME +  item.ContentUrl;
			return item;
		});
	}

	login(data):Observable<any> {
		return this.http.post(interfaceConfig.LOGIN,JSON.stringify(data),this.commonService.getHttpRequestConfig('post','','')).map((res:any)=> {
			if(res._body.length > 0){
				return res.json();
			}
		});
	}	

	// regist(data):Observable<any> {
	// 	let headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');
	// 	let options: RequestOptions = new RequestOptions();
	// 	options.headers = headers;
	// 	return this.http.post(interfaceConfig.REGIST,JSON.stringify(data),this.commonService.getHttpRequestConfig('post','','')).map((res:any)=> {
	// 		return res.json();
	// 	});
	// }

	// updatePwd(data):Observable<any> {
	// 	return this.http.get(this.commonService.getHttpRequestConfig('get',data,interfaceConfig.UPDATEPWD)).map((res:any)=> {
	// 		return res.json();
	// 	});
	// }

	// forgetPwd(data):Observable<any> {
	// 	return this.http.get(this.commonService.getHttpRequestConfig('get',data,interfaceConfig.FORGETPWD)).map((res:any)=> {
	// 		return res.json();
	// 	});
	// }

	// getSMSCodeSend(data):Observable<any> {
	// 	return this.http.get(this.commonService.getHttpRequestConfig('get',data,interfaceConfig.SMS_CODESEND)).map((res:any)=> {
	// 		return res.json();
	// 	});
	// }

	// getSMSVerification(data):Observable<any> {
	// 	return this.http.get(this.commonService.getHttpRequestConfig('get',data,interfaceConfig.SMS_VERIFICATION)).map((res:any)=> {
	// 		return res.json();
	// 	});
	// }




	// JSONP
	// getCourseList(data):Observable<any> {
	// 	let url = this.commonService.getHttpRequestConfig('get',data,interfaceConfig.GET_COURSE_LIST);
	// 	var params = new URLSearchParams();
	// 	params.set("callback", "JSONP_CALLBACK");
	// 	// params.set("callback", "__ng_jsonp__.__req0.finished");
	// 	// params.set("callback", "__ng_jsonp__.__req1.finished");
	// 	return this.jsonp.get(url, params).map((res:any)=> {
	// 		return this.transferImgUrl(res.json());
	// 	});
	// }

	
	// GET
	// getCourseListByPaging(data):Observable<any> {
	// 	return this.http.get(this.commonService.getHttpRequestConfig('get',data,interfaceConfig.COURSE_FIND_PAGING)).map((res:any)=> {
	// 		return this.transferImgUrl(res.json());
	// 	});
	// }

			
	// POST
	// addNote(data):Observable<any> {
	// 	return this.http.post(interfaceConfig.ADD_NOTE,JSON.stringify(data),this.commonService.getHttpRequestConfig('post','','')).map((res:any)=> {
	// 		if(res._body.length > 0){
	// 			return res.json();
	// 		}
	// 	});
	// }

}