import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { AuthComponent } from 'src/app/modules/auth/auth.component';
import { RoleComponent } from './pages/role/role.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { TeacherLoginComponent } from './pages/teacher-login/teacher-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';

const routes: Routes = [
  { path: 'role', component: RoleComponent, canActivate: [NoAuthGuard] },
  {
    path: '',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    children: [
      { path: 'student-login', component: StudentLoginComponent },
      { path: 'teacher-login', component: TeacherLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'admin-register', component: AdminRegisterComponent },
      { path: '**', redirectTo: '/auth/role' },
      // { path: '**', redirectTo: '/start' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [],
  providers: [NoAuthGuard],
})
export class AuthRouter {}
