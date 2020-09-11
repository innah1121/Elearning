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

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];


  exams: Exam[] = [];
  
  studentExams: StudentExam[] = [];
  examDone: boolean
  constructor(
    private examService: ExamService,
    private userCourseService: UserCourseService,
    private authenticationService: AppAuthService,
    private studentExamService: StudentExamService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user)
        this.currentUser = user;
      console.log(this.currentUser)
    })
  }


  ngOnInit() {
    this.examService.findExamsCoursesByUserId(this.currentUser.id).map(t => t.json()).toPromise().then(response => {
      this.exams = response as Exam[];
      console.log(this.exams)
    })

    this.examService.findExamsCoursesByUserId(this.currentUser.id).map(t => t.json()).toPromise().then(response => {
      this.exams = response as Exam[];
      this.exams.forEach((element) => {
        this.studentExamService.findUsersCourses({ userId: this.currentUser.id, examId: element.id }).map(t => t.json()).toPromise().then(response => {
          this.studentExams = response as StudentExam[];
          if (this.studentExams.length != 0) {
            this.examDone = true
          } else
            this.examDone = false

        });

      });
    })
  }
}