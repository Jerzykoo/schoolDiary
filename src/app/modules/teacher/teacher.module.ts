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

@NgModule({
  declarations: [DashboardComponent, TeacherComponent, TeachClassComponent, ComplainComponent, ProfileComponent, StudentDetailsComponent],
  imports: [CommonModule, SharedModule, TeacherRouter],
})
export class TeacherModule {}
