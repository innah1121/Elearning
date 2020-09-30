import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'app/model/Question';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionService } from 'app/service/question.service';
import { QuestionTypeService } from 'app/service/question-type.service';
import { CourseService } from 'app/service/course.service';
import { QuestionType } from 'app/model/QuestionType';
import { Option } from 'app/model/Option';
import { ExamQuestionService } from 'app/service/exam-question.service';
import { ExamQuestion } from 'app/model/ExamQuestion';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionComponent } from 'app/option/option.component';
export interface Type {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-question-popup',
  templateUrl: './create-question-popup.component.html',
  styleUrls: ['./create-question-popup.component.css']
})
export class CreateQuestionPopupComponent implements OnInit {
  question: Question = new Question();
  questionExam: ExamQuestion = new ExamQuestion();
  types: Type[] = [
    { value: 1, viewValue: 'Yes/No' },
    { value: 2, viewValue: 'SingleChoice' },
    { value: 3, viewValue: 'MultipleChoice' }
  ];
  questionType: any;
  questionTypes: QuestionType[];
  type1: boolean = false;
  type2: boolean = false;
  type3: boolean = false;

  displayCheckBox = false;
  option: Option = new Option();
  checked = false;
  pergjigjeESakte: number;
  savedQuestion: any;
  public options: number[] = [];
  constructor(
    private dialogRef: MatDialogRef<CreateQuestionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    private questionService: QuestionService,
    private questionTypeService: QuestionTypeService,
    private courseService: CourseService,
    private examQuestion: ExamQuestionService,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
    this.questionTypeService.getAllTypes().map(t => t.json()).toPromise().then(response => {
      this.questionTypes = response as QuestionType[];
      console.log(this.questionTypes)
    });

    this.courseService.findCourseById(this.data.courseId).subscribe(res => {
      console.log(res);
      this.question.course = JSON.parse(res.text());
      console.log(this.question.course)
    })
  }
  changeType(value) {
    this.questionTypeService.findTypeById(value).subscribe(res => {
      this.question.type = JSON.parse(res.text());
      console.log(this.question.type);
    })
  }
  hapOpsionet() {
    const dialogRef = this.dialog.open(OptionComponent, {
      data: {
        question: this.savedQuestion
      }
    });
  }
  onSubmit() {
    this.questionExam.exam = this.data.savedExam;
    
    this.questionService.createQuestion(this.question).subscribe(data => {
      console.log(data.json())
      this.savedQuestion = data.json();

      this.questionExam.question = this.savedQuestion;
      console.log(this.questionExam);
      this.examQuestion.addExamQuestion(this.questionExam).subscribe(d => {
        console.log(d)
      })
    }
)
}
}
