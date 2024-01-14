import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'complain', component: ComplainComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [],
  providers: [AuthGuard],
})
export class StudentRouter {}
