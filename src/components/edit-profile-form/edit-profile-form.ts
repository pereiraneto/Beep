import { Component } from '@angular/core';
import { User } from '../../models/user/user';

@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  user = {} as User;

  constructor() {
  }

  async saveProfile(){

  }

}
