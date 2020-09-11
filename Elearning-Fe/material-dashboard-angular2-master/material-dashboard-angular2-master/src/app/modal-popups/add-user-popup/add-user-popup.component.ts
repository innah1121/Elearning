import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'app/model/User';
import { Role } from 'app/model/Role';
import { University } from 'app/model/University';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RoleService } from 'app/service/role.service';
import { UniversityService } from 'app/service/university.service';
import { UserService } from 'app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.css']
})
export class AddUserPopupComponent implements OnInit {
  
  user : User  = new User();
  roles : Role[];
  universities : University[];
  
  constructor(
             private dialogRef : MatDialogRef<AddUserPopupComponent>,
             @Inject(MAT_DIALOG_DATA) private data : any,
             private router: Router,
             private roleService : RoleService,
             private uniService : UniversityService,
             private userService : UserService) { }

  ngOnInit() {
     
    this.roleService.findAllRoles().map(t=>t.json()).toPromise().then(response => 
      {this.roles = response as Role[];
       
       console.log(this.roles);  
      })
    
    this.uniService.findAllUniversities().map(t=>t.json()).toPromise().then(response => 
      {this.universities = response as University[];
       console.log(this.universities);  
      })
    
   
  }

  reloadData(){
    this.router.navigate(['/pedagoget']);
  }

  changeRole(value) {
    console.log(value);
  }
  onSubmit(){
    this.dialogRef.close("It was saved");
    this.userService.addLecturer(this.user).subscribe(data =>{
      console.log(data);
    })
    
  }



}
