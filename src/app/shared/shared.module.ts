import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { AppMaterialModule } from '../app.material.module';
import { ButtonComponent } from './components/button/button.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PublisherCardComponent } from './components/publisher-card/publisher-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StudentDetailsCardComponent } from './components/student-details-card/student-details-card.component';
import { AttendanceTableComponent } from './components/attendance-table/attendance-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { MarksTableComponent } from './components/marks-table/marks-table.component';
import { SubjectDetailsCardComponent } from './components/subject-details-card/subject-details-card.component';
import { TitleComponent } from './components/title/title.component';
import { SubjectTableComponent } from './components/subject-table/subject-table.component';
import { ClassDetailsCardComponent } from './components/class-details-card/class-details-card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';

// import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
// import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    PopoverComponent,
    PublisherCardComponent,
    MenubarComponent,
    CardComponent,
    IconComponent,
    SpinnerComponent,
    StudentDetailsCardComponent,
    AttendanceTableComponent,
    TableCellComponent,
    TableHeaderComponent,
    MarksTableComponent,
    SubjectDetailsCardComponent,
    TitleComponent,
    SubjectTableComponent,
    ClassDetailsCardComponent,
    CardWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    PortalModule,
    FontAwesomeModule,
    // NgxLoaderIndicatorModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    ButtonComponent,
    PopoverComponent,
    MenubarComponent,
    PublisherCardComponent,
    FontAwesomeModule,
    CardComponent,
    IconComponent,
    SpinnerComponent,
    StudentDetailsCardComponent,
    AttendanceTableComponent,
    TableCellComponent,
    TableHeaderComponent,
    MarksTableComponent,
    SubjectDetailsCardComponent,
    TitleComponent,
    SubjectTableComponent,
    ClassDetailsCardComponent,
    CardWrapperComponent,
    // NgxLoaderIndicatorModule,
  ],
})
export class SharedModule {}
