import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

const components = [
  LoginComponent
]

@NgModule({
  declarations: [
    ...components,
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    ...components,
    LoginComponent
  ]
})
export class LoginModule { }
