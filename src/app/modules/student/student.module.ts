import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRouter } from './student.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [StudentComponent, DashboardComponent, SubjectsComponent, AttendanceComponent, ComplainComponent, ProfileComponent],
  imports: [CommonModule, SharedModule, StudentRouter],
})
export class StudentModule {}
