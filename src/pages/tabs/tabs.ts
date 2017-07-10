import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Hospital } from '../hospital/hospital';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Hospital;

  constructor(public platform: Platform) {

  }
  test: Array<string> = ["HomePage", "AboutPage", "ContactPage", "Hospital"];
  change(a: number) {
  	if (this.platform.is("android")) {
  		for (let i = 0; i < 4; i++) {
  			if (i === a) {
  				this.test[i] = this.test[i].split("-")[0];
  			} else {
  				this.test[i] = this.test[i].split("-")[0] + "-outline";
  			}
  		}
  	}
  }
}
