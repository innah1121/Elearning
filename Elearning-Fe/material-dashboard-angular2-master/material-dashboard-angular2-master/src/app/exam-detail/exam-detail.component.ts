import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/service/course.service';
import { Course } from 'app/model/Course';
import { QuestionService } from 'app/service/question.service';
import { Question } from 'app/model/Question';
import { User } from 'app/model/User';
import { Subscription } from 'rxjs';
import { AppAuthService } from 'app/service/app-auth.service';
import { Exam } from 'app/model/Exam';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionPopupComponent } from 'app/modal-popups/create-question-popup/create-question-popup.component';
import { ExamService } from 'app/service/exam.service';
import { ExamQuestionService } from 'app/service/exam-question.service';
import { ExamQuestion } from 'app/model/ExamQuestion';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  exam :Exam = new Exam();
  examQuestion:ExamQuestion = new ExamQuestion();
  currentUser: User;
  currentUserSubscription: Subscription;

  showList: boolean = false;
  courses: Course[];
  oldQuestionList: Question[];
  selectedCourseId: number;
  courseId: number = 1;

  constructor(
    private authenticationService: AppAuthService,
    private courseService: CourseService,
    private questionService: QuestionService,
    private examService:ExamService,
    private examQuestionService:ExamQuestionService,
    public dialog: MatDialog) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user)
        this.currentUser = user;
    });
  }

  ngOnInit() {
    console.log(this.showList);
    this.courseService.findAllCourses().map(t => t.json()).toPromise().then(response => {
      this.courses = response as Course[];
      console.log(this.courses);
    })
  }
  

  selectCourse(value) {
    this.selectedCourseId=value
    this.courseService.findCourseById(value).subscribe(res=>{
      this.exam.course = JSON.parse(res.text());
      
      console.log(this.exam.course)
    })
  }

  onShowlist() {
    this.showList = true;
    console.log(this.showList);
    this.questionService.findAllQuestionsByCourse(this.selectedCourseId).map(t => t.json()).toPromise().then(response => {
      this.oldQuestionList = response as Question[];
      console.log(this.oldQuestionList);
    });
  }

  get selectedOptions() {
    return this.oldQuestionList
      .filter(opt => opt['checked'])
      .map(opt => opt.id);
  }

  onSubmit(){
    this.examService.addExam(this.exam).subscribe(res=>{
      console.log(res)
    })
    this.examQuestion.exam = this.exam;
    this.selectedOptions.forEach(element=>{
      this.questionService.getById(element).subscribe(res=>{
        this.examQuestion.question = JSON.parse(res.text());
      })
      this.examQuestionService.addExamQuestion(this.examQuestion).subscribe(res=>{
        console.log(res)
      })

    })

  }

  openDialog(): void {
    console.log(this.selectedCourseId);
    const dialogRef = this.dialog.open(CreateQuestionPopupComponent, {
      data: {
        
        courseId: this.selectedCourseId
      }
    });

    dialogRef.afterClosed().subscribe(() => { this.ngOnInit(); })
  }
}
