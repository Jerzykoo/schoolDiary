import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRouter } from './auth.router';
import { ErrorPasswordComponent } from './components/error-password/error-password.component';
import { DividerComponent } from './components/divider/divider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleComponent } from './pages/role/role.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { TeacherLoginComponent } from './pages/teacher-login/teacher-login.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import {
  GoogleSigninButtonDirective,
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AuthComponent,

    ErrorPasswordComponent,
    DividerComponent,
    RoleComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    TeacherLoginComponent,
    AdminRegisterComponent,
  ],
  imports: [SharedModule, AuthRouter, GoogleSigninButtonModule],
})
export class AuthModule {}
