import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, IonicPageModule} from 'ionic-angular';
// import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import {HttpModule, JsonpModule} from '@angular/http';
import {MyApp} from './app.component';
import {IonicStorageModule} from '@ionic/storage';

import {ImageUploadModule} from 'angular2-image-upload';
import {CalendarModule} from "ion2-calendar";

import {AboutPage} from '../pages/about/about';
import {MySkill} from '../pages/about/my-skill/my-skill';
import {AddSkill} from '../pages/about/my-skill/add-skill/add-skill';
import {MyCertificate} from '../pages/about/my-certificate/my-certificate';
import {AddCertificate} from '../pages/about/my-certificate/add-certificate/add-certificate';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {Hospital} from '../pages/hospital/hospital';
import {Login} from '../pages/common/login/login';
import {Certificate} from '../pages/common/certificate/certificate';
import {Exam} from '../pages/hospital/exam/exam';
import {ExamAppointment} from '../pages/hospital/exam/exam-appointment/exam-appointment';
import {ExamDetail} from '../pages/hospital/exam/exam-appointment/exam-detail/exam-detail';
// import {Chat} from '../pages/contact/chat/chat';
import {Score} from '../pages/hospital/score/score';
import {Scoredetail} from '../pages/hospital/score/scoredetail/scoredetail';
import {Work} from '../pages/hospital/work/work';
import {AlertPage} from '../pages/common/alert-page/alert-page';
import {Order} from '../pages/hospital/order/order';
import {Myorder} from '../pages/hospital/order/myorder/myorder';
import {TakeOrder} from '../pages/hospital/order/take-order/take-order';
import {TakeorderSuccess} from '../pages/hospital/order/takeorder-success/takeorder-success';
import {OrderDetail} from '../pages/hospital/order/order-detail/order-detail';
import {MyBill} from '../pages/about/my-bill/my-bill';
import {FeedBackPage} from "../pages/about/feed-back/feed-back";
import {MyDetailPagePage} from '../pages/about/my-detail-page/my-detail-page';
import {Publish} from '../pages/about/publish/publish';
import {Notice} from '../pages/common/notice/notice';
import {Setup} from '../pages/common/setup/setup';
import {Welcome} from '../pages/common/welcome/welcome';

// import {RelativeTime} from "../pipes/relative-time";

import {Blsj} from '../pages/jumpPages/blsj/blsj';
import {NurseClass} from '../pages/jumpPages/nurse-class/nurse-class';

import {ContactorlistComponent} from '../components/contactorlist-component/contactorlist-component';
import {EmojiPickerComponentModule} from "../components/emoji-picker/emoji-picker.module";


import {CommonService} from '../providers/common/CommonService';
import {Localstorage} from '../providers/common/LocalStorage';
import {CommonCheck} from '../providers/common/CommonCheck';
import {HomeService} from '../providers/home/HomeService';
import {ChatService, ChatMessage} from "../providers/chat/chat-service";
import {EmojiProvider} from '../providers/chat/emoji';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MySkill,
    AddSkill,
    MyCertificate,
    AddCertificate,
    ContactPage,
    HomePage,
    TabsPage,
    Hospital,
    Login,
    Blsj,
    NurseClass,
    Certificate,
    Exam,
    ExamAppointment,
    ExamDetail,
    // Chat,
    Score,
    Scoredetail,
    Work,
    AlertPage,
    Order,
    Myorder,
    TakeOrder,
    TakeorderSuccess,
    OrderDetail,
    MyBill,
    MyDetailPagePage,
    Publish,
    Notice,
    Setup,
    Welcome,
    // RelativeTime,
    ContactorlistComponent,
    FeedBackPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    EmojiPickerComponentModule,
    CalendarModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    ImageUploadModule.forRoot(),
    // IonicPageModule.forChild(Chat)
    // IonicPageModule.forChild(Login),
    // IonicPageModule.forChild(HomePage),
    // IonicPageModule.forChild(Welcome)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MySkill,
    AddSkill,
    MyCertificate,
    AddCertificate,
    ContactPage,
    HomePage,
    TabsPage,
    Hospital,
    Login,
    Blsj,
    NurseClass,
    Certificate,
    Exam,
    ExamAppointment,
    ExamDetail,
    // Chat,
    Score,
    Scoredetail,
    Work,
    AlertPage,
    Order,
    Myorder,
    TakeOrder,
    TakeorderSuccess,
    OrderDetail,
    MyBill,
    MyDetailPagePage,
    Publish,
    Notice,
    Setup,
    Welcome,
    ContactorlistComponent,
    FeedBackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    Localstorage,
    CommonCheck,
    HomeService,
    ImageUploadModule,
    ChatService,
    ChatMessage,
    EmojiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
