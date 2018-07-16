import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user/user';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  account = {} as User;

  constructor(private navCtrl: NavController, private toast: ToastController, private authProvider: AuthProvider ) {
  }

  cancel(){
    this.navCtrl.pop();
  }

  async registerUser(){
    const result = await this.authProvider.createUser(this.account);
    if(result){
      this.navCtrl.pop();
    }
  }

}
