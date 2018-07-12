import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  constructor(private navCtrl: NavController) {
  }

  goRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

  logar(){
    this.navCtrl.setRoot('TabsPage');
  }

}
