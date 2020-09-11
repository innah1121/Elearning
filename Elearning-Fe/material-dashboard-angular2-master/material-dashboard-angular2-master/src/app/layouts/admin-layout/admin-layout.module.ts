import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from 'app/login/login.component';
import { StudentListComponent } from 'app/student-list/student-list.component';
import { LecturerListComponent } from 'app/lecturer-list/lecturer-list.component';
import { AddCourseComponent } from 'app/add-course/add-course.component';
import { ExamListComponent } from 'app/exam-list/exam-list.component';
import { AddExamComponent } from 'app/add-exam/add-exam.component';
import { ExamDetailComponent } from 'app/exam-detail/exam-detail.component';
import { AddUserPopupComponent } from 'app/modal-popups/add-user-popup/add-user-popup.component';
import { ConfirmDeletionComponent } from 'app/modal-popups/confirm-deletion/confirm-deletion.component';
import { CourseListComponent } from 'app/course-list/course-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StudentCoursesComponent } from 'app/student-courses/student-courses.component';
@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    CommonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    StudentListComponent,
    LecturerListComponent,
    AddCourseComponent,
    ExamListComponent,
    AddExamComponent,
    ExamDetailComponent,
    CourseListComponent,
    StudentCoursesComponent
    //LoginComponent

  ]
})

export class AdminLayoutModule {}
