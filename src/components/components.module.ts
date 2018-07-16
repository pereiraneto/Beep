import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular/module';
import { RegisterComponent } from './register/register';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';

@NgModule({
	declarations: [LoginFormComponent,
    RegisterComponent,
    EditProfileFormComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterComponent,
    EditProfileFormComponent]
})
export class ComponentsModule {}
