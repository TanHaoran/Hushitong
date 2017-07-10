//内网
export const base:string = 'http://192.168.0.100:9400/';
//外网正式
// export const base:string = 'http://bl.buzzlysoft.com/';
//外网测试
// export const base:string = 'http://test.buzzlysoft.com/';
//本地测试
// export const base:string = 'http://localhost:50575/';
// adminUsers

//子程序链接
export const BLSJ:string = "http://192.168.0.100:9400/";
export const NURSE_CLASS:string = "http://192.168.0.100:8100/";


//服务
		export const LOGIN:string = base +  '/Aers.svc/login';
		export const REGIST:string = base +  '/Aers.svc/Registeruser';
		export const UPDATEPWD:string = base +  '/Aers.svc/UpdatePwd';
		export const FORGETPWD:string = base +  '/Aers.svc/ForgetPwd';

		export const IMG_HANDLER:string = base + '/ImgHandler.ashx';

