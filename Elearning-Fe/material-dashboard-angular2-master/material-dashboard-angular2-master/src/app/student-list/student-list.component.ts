import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { UserService } from 'app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserPopupComponent } from 'app/modal-popups/add-user-popup/add-user-popup.component';
import { UserUniversity } from 'app/model/UserUniversity';
import { UserUniversityService } from 'app/service/user-university.service';
import { ConfirmDeletionComponent } from 'app/modal-popups/confirm-deletion/confirm-deletion.component';
import { AddStudentComponent } from 'app/modal-popups/add-student/add-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: User[] = [];
  studentId: number;
  userUniversityInfo: UserUniversity;
  faculty: string;
  registrationDate: Date;
  constructor(private userService: UserService,
    public dialog: MatDialog,
    private userUniversityService: UserUniversityService) { }

  ngOnInit() {
    // this.userService.findAllStudents()
    // .subscribe
    // (res => {this.students = res.json();
    // console.log(res)})
    this.reloadData()


  }
  reloadData() {
    this.userService.findAllStudents()
      .map(t => t.json()).toPromise().then(response => {
        this.students = response as User[];
        console.log(this.students);
        for (let u of this.students) {
          console.log(u)
          this.userUniversityService.findUsersFacultyInformation(u.id).subscribe(res => {
            this.userUniversityInfo = JSON.parse(res.text());
            this.registrationDate = this.userUniversityInfo.registrationDate;
            this.faculty = this.userUniversityInfo.university.name;
          })

        }
      })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: {
        userId: this.studentId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    dialogRef.afterClosed().subscribe(() => { this.reloadData(); })
  }

  onDelete(student) {
    console.log(student)
    console.log(student.id)
    this.dialog.open(ConfirmDeletionComponent)
      .afterClosed().subscribe(res => {
        if (res) {
          console.log(res)
          this.userService.deleteUser(student.id).subscribe(data => {
            console.log(data)
            this.reloadData();
          })
        }
      });

  }
}
