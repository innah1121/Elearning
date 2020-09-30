import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExamService } from 'app/service/exam.service';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.css']
})
export class StudentExamsComponent implements OnInit {
  studentExams: any;
  constructor(private dialogRef: MatDialogRef<StudentExamsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.findByCourseId(this.data.courseid).subscribe(res => {
      this.studentExams = res.json();
      console.log(this.studentExams)
    })
  }

}
