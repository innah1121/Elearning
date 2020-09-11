import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string;
 
  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }
  
  public findAllCourses(){
    return this.http.get(`${this.url}/courses`);
  }

  public findCourseById(courseid:number): Observable<any> {
    return this.http.get(`http://localhost:8080/coursebyId/${courseid}`);
  }

  public findLecturerCourses(id:number): Observable<any> {
    return this.http.get(`http://localhost:8080/lecturerCourses/${id}`);
  }

  addCourse(course:any):Observable<any>{
    return this.http.post( `http://localhost:8080/addCourse`,course);
  }
  
  
}

 
  