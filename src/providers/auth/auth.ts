import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { User } from '../../models/user/user';
import { UserInfo } from "firebase/app";
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthProvider {

  private authUser$: Subscription;
  private authUser: User;
  profileObject: FirebaseObjectObservable<User>;

  constructor(private auth: AngularFireAuth, private toast: ToastController, 
    private database: AngularFireDatabase) {
    // this.authUser$ = this.auth.createUser
  }

  async createUser(account: User, user: UserInfo){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      const result = await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password);
      await this.profileObject.set(account);
      return true;
    } catch (e) {
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
      return false;
    }
  }

  async logar(account: User){
    try {
      const result = await this.auth.auth.signInWithEmailAndPassword(account.email, account.password);
      return true;
    } catch (e) {
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
      return false;
    }
  }

}
