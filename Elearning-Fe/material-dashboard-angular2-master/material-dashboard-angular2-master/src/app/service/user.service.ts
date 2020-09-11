import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from 'app/model/User';
import 'rxjs/add/operator/map'
import { map } from 'rxjs-compat/operator/map';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;
 
  constructor(private http: Http) {
    this.usersUrl = 'http://localhost:8080';
  }
  
  public findAllLecturers()  {
    return this.http.get(`${this.usersUrl}/lecturers`);
  }
  
  public findAllStudents()   {
    return this.http.get(`${this.usersUrl}/students` );
  }

  addStudent(user:any):Observable<any>{
    console.log({"studentii":user})
    return this.http.post(  this.usersUrl + `/addStudent`,user);
  }

  addLecturer(user:any):Observable<any>{
    return this.http.post(  this.usersUrl + `/addLecturer`,user);
  }
  
  deleteUser(userId : number) : Observable<any>  {
    return this.http.delete(  this.usersUrl + `/deleteUser/${userId}`);
  }
  
  getUserById(userId : number) : Observable<any>  {
    return this.http.get(  this.usersUrl + `/userById/${userId}`);
  }
  
  updateUser(user:any):Observable<any>{
    console.log({"studentii":user})
    return this.http.post(  this.usersUrl + `/updateUser`,user);
  }

  
}
