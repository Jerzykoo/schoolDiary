import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeacherComponent } from './teacher.component';
import { TeacherRouter } from './teacher.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachClassComponent } from './pages/teach-class/teach-class.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentDetailsComponent } from './pages/teach-class/pages/student-details/student-details.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { AddMarkComponent } from './pages/add-mark/add-mark.component';
import { NoticesComponent } from './pages/notices/notices.component';

@NgModule({
  declarations: [DashboardComponent, TeacherComponent, TeachClassComponent, ComplainComponent, ProfileComponent, StudentDetailsComponent, AddAttendanceComponent, AddMarkComponent, NoticesComponent],
  imports: [CommonModule, SharedModule, TeacherRouter],
})
export class TeacherModule {}
