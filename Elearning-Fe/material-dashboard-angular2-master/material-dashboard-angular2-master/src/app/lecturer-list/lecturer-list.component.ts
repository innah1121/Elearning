import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { UserService } from 'app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserPopupComponent } from 'app/modal-popups/add-user-popup/add-user-popup.component';
import { UserUniversityService } from 'app/service/user-university.service';
import { UserUniversity } from 'app/model/UserUniversity';
import { ConfirmDeletionComponent } from 'app/modal-popups/confirm-deletion/confirm-deletion.component';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css']
})
export class LecturerListComponent implements OnInit {
  userRoles: string[] = ['admin'];
  lecturers: User[] = [];
  lecturerId: number;
  userUniversityInfo: UserUniversity;
  faculty: string;
  registrationDate: Date;
  constructor(private userService: UserService,
    private userUniversityService: UserUniversityService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.findAllLecturers()
      .map(t => t.json()).toPromise().then(response => {
        this.lecturers = response as User[];
        console.log(this.lecturers);

        for (let u of this.lecturers) {
          this.userUniversityService.findUsersFacultyInformation(u.id).subscribe(res => {
            console.log(res);
            this.userUniversityInfo = JSON.parse(res.text());
            this.registrationDate = this.userUniversityInfo.registrationDate;
            this.faculty = this.userUniversityInfo.university.name;

          })

        }
      })

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserPopupComponent, {
      data: {
        userId: this.lecturerId
      }
    });

    dialogRef.afterClosed().subscribe(() => { this.reloadData(); })
  }

  onDelete(l){
    console.log(l)
    console.log(l.id)
    this.dialog.open(ConfirmDeletionComponent)
      .afterClosed().subscribe(res => {
        if (res) {
          console.log(res)
          this.userService.deleteUser(l.id).subscribe(data => {
            console.log(data)
            this.reloadData();
          })
        }
      });

  }
}