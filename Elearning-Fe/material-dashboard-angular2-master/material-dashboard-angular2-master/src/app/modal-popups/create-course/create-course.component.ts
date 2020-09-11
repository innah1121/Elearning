import { Component, OnInit, Inject } from '@angular/core';
import { Course } from 'app/model/Course';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from 'app/service/course.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  course : Course  = new Course();
  
  
  constructor(
             private dialogRef : MatDialogRef<CreateCourseComponent>,
             @Inject(MAT_DIALOG_DATA) private data : any,
             private router: Router,
             private courseService : CourseService,
             private userService:UserService) { }

  ngOnInit() {
    

    this.userService.getUserById(this.data.teacherId).subscribe(res=>{
      this.course.teacher = JSON.parse(res.text());
      console.log(this.course.teacher)
    })
  }

  onSubmit(){
    console.log(this.course)
    this.dialogRef.close("It was saved");
    this.courseService.addCourse(this.course).subscribe(data =>{
      console.log(data);
    })
    
  }


}
