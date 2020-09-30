import { Component, OnInit } from '@angular/core';
import { StudentExam } from 'app/model/StudentExam';
import { UserCourseService } from 'app/service/user-course.service';
import { ExamService } from 'app/service/exam.service';
import { User } from 'app/model/User';
import { Subscription } from 'rxjs';
import { Course } from 'app/model/Course';
import { Exam } from 'app/model/Exam';
import { AppAuthService } from 'app/service/app-auth.service';
import { UserCourse } from 'app/model/UserCourse';
import { CourseExamBean } from 'app/model/CourseExamBean';
import { StudentExamService } from 'app/service/student-exam.service';
import { ExamDone } from 'app/model/ExamDone';
import { MatDialog } from '@angular/material/dialog';
import { StudentExamsComponent } from 'app/modal-popups/student-exams/student-exams.component';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {
  userRoles: string[] = ['student'];
  currentUser: User;
  currentUserSubscription: Subscription;
  courses: any;
  users: User[] = [];
  exams: Exam[] = [];
  studentExams: any;
  examDone: boolean
  constructor(
    private examService: ExamService,
    private userCourseService: UserCourseService,
    private authenticationService: AppAuthService,
    private studentExamService: StudentExamService,
    public dialog: MatDialog) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
      console.log(this.currentUser);
      }
    })
  }


  ngOnInit() {
    this.userCourseService.findUsersCourses(this.currentUser.id).subscribe(res => {
      console.log(res.json())
      this.courses = res.json();
      console.log(this.courses)
    })
  }

  showExams(value) {
    console.log(value)
    const dialogRef = this.dialog.open(StudentExamsComponent, {
      data: {
        courseid: value
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
