import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeachClassComponent } from './pages/teach-class/teach-class.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentDetailsComponent } from './pages/teach-class/pages/student-details/student-details.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { AddMarkComponent } from './pages/add-mark/add-mark.component';
import { NoticesComponent } from './pages/notices/notices.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'teach-class', component: TeachClassComponent },
      { path: 'student-details/:id', component: StudentDetailsComponent },
      {
        path: 'attendence/edit/:id/:subjectId',
        component: AddAttendanceComponent,
      },
      { path: 'marks/edit/:id/:subjectId', component: AddMarkComponent },
      { path: 'complain', component: ComplainComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [],
  providers: [AuthGuard],
})
export class TeacherRouter {}
