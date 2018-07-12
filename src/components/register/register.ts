import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  constructor(public navCtrl: NavController) {
  }

  cancel(){
    this.navCtrl.pop();
  }

  registerUser(){
    this.navCtrl.pop();
  }

}
