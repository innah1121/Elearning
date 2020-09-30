import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/service/course.service';
import { Course } from 'app/model/Course';
import { User } from 'app/model/User';
import { Subscription } from 'rxjs';
import { AppAuthService } from 'app/service/app-auth.service';
import { RegisterStudentInCourseComponent } from 'app/modal-popups/register-student-in-course/register-student-in-course.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from 'app/modal-popups/create-course/create-course.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  userRoles: string[] = ['pedagog'];
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  courses: Course[];


  constructor(
    private courseService: CourseService,
    private authenticationService: AppAuthService,
    public dialog: MatDialog) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);
      }
    })
  }
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.courseService.findLecturerCourses(this.currentUser.id).map(t => t.json()).toPromise().then(response => {
      this.courses = response as Course[];
      console.log(this.courses)
    })
  }

  registerStudent(value) {
    console.log(value)
    const dialogRef = this.dialog.open(RegisterStudentInCourseComponent, {
      data: {
        courseid: value
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    dialogRef.afterClosed().subscribe(() => { this.reloadData(); })
  }

  createCourse() {
    const dialogReff = this.dialog.open(CreateCourseComponent, {
      data: {
        teacherId: this.currentUser.id
      }
    });

    dialogReff.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    dialogReff.afterClosed().subscribe(() => { this.reloadData(); });
  }
}

