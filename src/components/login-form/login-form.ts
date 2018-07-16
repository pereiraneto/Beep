import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { User } from '../../models/user/user';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as User;

  constructor(private navCtrl: NavController, private authProvider: AuthProvider) {
  }

  goRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

  async logar(){
    const result = await this.authProvider.logar(this.account);
    if(result){
      this.navCtrl.setRoot('TabsPage');
    }
  }

}
