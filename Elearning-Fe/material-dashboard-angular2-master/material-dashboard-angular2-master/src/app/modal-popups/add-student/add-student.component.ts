import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'app/model/User';
import { University } from 'app/model/University';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleService } from 'app/service/role.service';
import { UniversityService } from 'app/service/university.service';
import { UserService } from 'app/service/user.service';
import { Router } from '@angular/router';
import { Role } from 'app/model/Role';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  user : User  = new User();
  roles : Role[];
  universities : University[];
  
  constructor(
             private dialogRef : MatDialogRef<AddStudentComponent>,
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
    this.router.navigate(['/studentet']);
  }

  changeRole(value) {
    console.log(value);
  }
  onSubmit(){
    this.dialogRef.close("It was saved");
    console.log({"studentii":this.user})
    this.userService.addStudent(this.user).subscribe(data =>{
      console.log(data);
    })
    
  }

}
