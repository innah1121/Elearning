import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { UserCourse } from 'app/model/UserCourse';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public findUsersCourses(userId: number): Observable<any> {
     return this.http.get(`http://localhost:8080/userCourses/${userId}`);
  }
  public registerStudent(student: any , studentId: number , courseId: number): Observable<any> {
    return this.http.post(  this.url + `/registerStudent/${studentId}/${courseId}`, student);
  }

  shtooooo(c: any ): Observable<any> {
    console.log({"postObject": c})
    return this.http.post( this.url + `/registerStudent`, c);
  }
}
