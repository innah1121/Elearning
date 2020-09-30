import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { AddUserPopupComponent } from './modal-popups/add-user-popup/add-user-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmDeletionComponent } from './modal-popups/confirm-deletion/confirm-deletion.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CreateQuestionPopupComponent } from './modal-popups/create-question-popup/create-question-popup.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StudentCoursesComponent } from './student-courses/student-courses.component';

import { AddStudentComponent } from './modal-popups/add-student/add-student.component';
import { RegisterStudentInCourseComponent } from './modal-popups/register-student-in-course/register-student-in-course.component';
import { CreateCourseComponent } from './modal-popups/create-course/create-course.component';
import { OptionComponent } from './option/option.component';
import { StudentExamsComponent } from './modal-popups/student-exams/student-exams.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    //StudentListComponent,
    //LecturerListComponent,
    //CourseListComponent,
    //AddCourseComponent,
    //ExamListComponent,
    //AddExamComponent,
    //ExamDetailComponent,
    AddUserPopupComponent,
    ConfirmDeletionComponent,
    LoginComponent,
    CreateQuestionPopupComponent,
    AddStudentComponent,
    RegisterStudentInCourseComponent,
    CreateCourseComponent,
    OptionComponent,
    StudentExamsComponent,
    // StudentCoursesComponent

  ],
  entryComponents: [AddUserPopupComponent, ConfirmDeletionComponent, CreateQuestionPopupComponent,
    AddStudentComponent, RegisterStudentInCourseComponent, CreateCourseComponent, OptionComponent,
    StudentExamsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
