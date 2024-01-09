import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRouter } from './student.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [StudentComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, StudentRouter],
})
export class StudentModule {}
