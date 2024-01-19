import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminComponent } from './admin.component';
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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'classes/details/:id', component: ClassesDetailsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'teachers/add', component: TeacherAddComponent },
      { path: 'teachers/:id', component: TeacherDetailsComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'students/add/:classId', component: AddStudentComponent },
      { path: 'students/details/:id', component: StudentDetailsComponent },
      { path: 'subjects/details/:id', component: SubjectDetailsComponent },
      { path: 'subjects/add/:classId', component: AddSubjectsComponent },
      { path: 'attendence/add/:id', component: AddAttendenceComponent },
      {
        path: 'attendence/edit/:id/:subjectId',
        component: AddAttendenceComponent,
      },
      { path: 'marks/add/:id', component: AddMarkComponent },
      { path: 'marks/edit/:id/:subjectId', component: AddMarkComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'notices/add', component: AddNoticeComponent },
      { path: 'class-choose', component: ClassChooseComponent },
      { path: 'subject-choose/:classId', component: SubjectChooseComponent },
      { path: '**', redirectTo: '/admin/dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
})
export class AdminRouter {}
