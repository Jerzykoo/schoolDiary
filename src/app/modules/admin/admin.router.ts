import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { AdminComponent } from './admin.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SuccessComponent } from './pages/success/success.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { AddNoticeComponent } from './pages/notices/pages/add-notice/add-notice.component';
import { StudentDetailsComponent } from './pages/students/student-details/student-details.component';
import { AddAttendenceComponent } from './components/add-attendence/add-attendence.component';
import { AddMarkComponent } from './components/add-mark/add-mark.component';
import { TeacherDetailsComponent } from './pages/teachers/pages/teacher-details/teacher-details.component';
import { ClassChooseComponent } from './pages/teachers/pages/class-choose/class-choose.component';
import { SubjectChooseComponent } from './pages/teachers/pages/subject-choose/subject-choose.component';
import { TeacherAddComponent } from './pages/teachers/pages/teacher-add/teacher-add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'teachers/add', component: TeacherAddComponent },
      { path: 'teachers/:id', component: TeacherDetailsComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'students/details/:id', component: StudentDetailsComponent },
      { path: 'attendence/add/:id', component: AddAttendenceComponent },
      {
        path: 'attendence/edit/:id/:subjectId',
        component: AddAttendenceComponent,
      },
      { path: 'marks/add/:id', component: AddMarkComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'notices/add', component: AddNoticeComponent },
      { path: 'class-choose', component: ClassChooseComponent },
      { path: 'subject-choose/:classId', component: SubjectChooseComponent },
      { path: 'achievements', component: AchievementsComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'success', component: SuccessComponent },
      { path: '**', redirectTo: '/admin/dashboard' },
      // { path: '**', redirectTo: '/start' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [],
  providers: [AuthGuard],
})
export class AdminRouter {}
