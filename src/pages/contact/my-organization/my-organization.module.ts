import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyOrganizationPage } from './my-organization';

@NgModule({
  declarations: [
    MyOrganizationPage,
  ],
  imports: [
    IonicPageModule.forChild(MyOrganizationPage),
  ],
  exports: [
    MyOrganizationPage
  ]
})
export class MyOrganizationPageModule {}
