import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1root: string;
  tab2root: string;
  tab3root: string;

  constructor(private navCtrl: NavController) {
    this.tab1root = 'InboxPage';
    this.tab2root = 'ChannelsPage';
    this.tab3root = 'ProfilePage';
  }

}
