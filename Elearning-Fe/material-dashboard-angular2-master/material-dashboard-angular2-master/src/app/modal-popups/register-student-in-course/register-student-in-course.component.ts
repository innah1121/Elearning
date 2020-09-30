import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'app/service/user.service';
import { User } from 'app/model/User';
import { UserCourseService } from 'app/service/user-course.service';
import { CourseService } from 'app/service/course.service';
import { Course } from 'app/model/Course';
import { UserCourse } from 'app/model/UserCourse';

@Component({
  selector: 'app-register-student-in-course',
  templateUrl: './register-student-in-course.component.html',
  styleUrls: ['./register-student-in-course.component.css']
})
export class RegisterStudentInCourseComponent implements OnInit {

  students: User[];
  course: Course;
  student: User;
  c: UserCourse = new UserCourse();
  constructor(
    private dialogRef: MatDialogRef<RegisterStudentInCourseComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private userCourseService: UserCourseService,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.reloadData()
    this.courseService.findCourseById(this.data.courseid).subscribe(res => {
      this.c.course = JSON.parse(res.text());
      console.log(this.c.course)
    })
  }
  reloadData() {
    this.userService.findAllStudents()
      .map(t => t.json()).toPromise().then(response => {
        this.students = response as User[];
      })
  }

  get selectedOptions() {
    return this.students
      .filter(opt => opt['checked'])
      .map(opt => opt.id);
  }

  onSubmit() {
    this.dialogRef.close('It was saved');
    console.dir({'studentet': this.selectedOptions});
    this.selectedOptions.forEach(element => {
      this.userService.getUserById(element).subscribe(res => {
        this.c.user = JSON.parse(res.text());
        console.log(this.c.user)
        this.userCourseService.shtooooo(this.c).subscribe(data => {
          console.log(data);
        });
      })
    })
  }
}
