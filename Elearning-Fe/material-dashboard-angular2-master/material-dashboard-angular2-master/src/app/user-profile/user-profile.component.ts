import { Component, OnInit } from '@angular/core';
import { AppAuthService } from 'app/service/app-auth.service';
import { UserService } from 'app/service/user.service';
import { Subscription } from 'rxjs';
import { User } from 'app/model/User';
import { UserUniversityService } from 'app/service/user-university.service';
import { UserUniversity } from 'app/model/UserUniversity';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  user: User = new User()
  faculty: UserUniversity;
  facultyName: string
  constructor(
    private authenticationService: AppAuthService,
    private userService: UserService,
    private userUniversityService: UserUniversityService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);
      }
    });
  }
  ngOnInit() {
    console.log(this.currentUser)
    this.getFacultyInfo();
  }

  getFacultyInfo() {
    this.userUniversityService.findUsersFacultyInformation(this.currentUser.id).subscribe(res => {
      console.log(res.json())
      this.facultyName = res.json().university.name;
    })
  }

  onSubmit() {
    this.userService.updateUser(this.currentUser).subscribe(data => {
      console.log(data)
    })
  }
}
