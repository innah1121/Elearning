import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public findExamsCoursesByUserId(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/examsCourses/${userId}`);
  }
  // addExamQuestion
  public addExam(exam: any): Observable<any> {
    return this.http.post( `http://localhost:8080/addExam`, exam);
  }
  public findUserCourseExam(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/findUserCourseExam/${userId}`);
  }
  public findByCourseId(courseId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/examsByCourse/${courseId}`);
  }
}
