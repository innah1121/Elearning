import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentExamService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public findUsersCourses({ userId, examId }: { userId: number; examId: number; }): Observable<any> {
     return this.http.get(`http://localhost:8080/examsCourses/${userId}/${examId}`);
  }
  public findExamsOfUser(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/examsStudents/${userId}`);
  }
}
