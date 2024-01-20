import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRouter } from './admin.router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { AddNoticeComponent } from './pages/notices/pages/add-notice/add-notice.component';
import { StudentDetailsComponent } from './pages/students/pages/student-details/student-details.component';
import { AddAttendenceComponent } from './components/add-attendence/add-attendence.component';
import { AddMarkComponent } from './components/add-mark/add-mark.component';
import { TeacherDetailsComponent } from './pages/teachers/pages/teacher-details/teacher-details.component';
import { ClassChooseComponent } from './pages/teachers/pages/class-choose/class-choose.component';
import { SubjectChooseComponent } from './pages/teachers/pages/subject-choose/subject-choose.component';
import { TeacherAddComponent } from './pages/teachers/pages/teacher-add/teacher-add.component';
import { SubjectDetailsComponent } from './pages/subjects/pages/subject-details/subject-details.component';
import { AddSubjectsComponent } from './pages/subjects/pages/add-subjects/add-subjects.component';
import { ClassesDetailsComponent } from './pages/classes/pages/classes-details/classes-details.component';
import { AddStudentComponent } from './pages/classes/pages/add-student/add-student.component';
import { AddClassComponent } from './pages/classes/pages/add-class/add-class.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ClassesComponent,
    SubjectsComponent,
    TeachersComponent,
    StudentsComponent,
    NoticesComponent,
    AddNoticeComponent,
    StudentDetailsComponent,
    AddAttendenceComponent,
    AddMarkComponent,
    TeacherDetailsComponent,
    ClassChooseComponent,
    SubjectChooseComponent,
    TeacherAddComponent,
    SubjectDetailsComponent,
    AddSubjectsComponent,
    ClassesDetailsComponent,
    AddStudentComponent,
    AddClassComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRouter],
})
export class AdminModule {}
