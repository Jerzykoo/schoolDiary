import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRouter } from './admin.router';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { TitleComponent } from './components/title/title.component';
import { AddNoticeComponent } from './pages/notices/pages/add-notice/add-notice.component';
import { StudentDetailsComponent } from './pages/students/student-details/student-details.component';
import { AddAttendenceComponent } from './components/add-attendence/add-attendence.component';
import { AddMarkComponent } from './components/add-mark/add-mark.component';
import { TeacherDetailsComponent } from './pages/teachers/pages/teacher-details/teacher-details.component';
import { ClassChooseComponent } from './pages/teachers/pages/class-choose/class-choose.component';
import { SubjectChooseComponent } from './pages/teachers/pages/subject-choose/subject-choose.component';
import { TeacherAddComponent } from './pages/teachers/pages/teacher-add/teacher-add.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    EditUserDialogComponent,
    AddUserDialogComponent,
    ClassesComponent,
    SubjectsComponent,
    TeachersComponent,
    StudentsComponent,
    NoticesComponent,
    TitleComponent,
    AddNoticeComponent,
    StudentDetailsComponent,
    AddAttendenceComponent,
    AddMarkComponent,
    TeacherDetailsComponent,
    ClassChooseComponent,
    SubjectChooseComponent,
    TeacherAddComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRouter],
})
export class AdminModule {}
