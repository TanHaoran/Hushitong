import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FeedBackPage} from './feed-back';

@NgModule({
  declarations: [
    FeedBackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedBackPage),
  ],
  exports: [
    FeedBackPage
  ]
})
export class FeedBackPageModule {
}
