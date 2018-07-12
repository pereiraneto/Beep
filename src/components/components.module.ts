import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular/module';
import { RegisterComponent } from './register/register';

@NgModule({
	declarations: [LoginFormComponent,
    RegisterComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterComponent]
})
export class ComponentsModule {}
