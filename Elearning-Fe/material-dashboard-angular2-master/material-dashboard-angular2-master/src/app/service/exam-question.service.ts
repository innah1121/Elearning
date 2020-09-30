import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ExamQuestionService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  
  //addExamQuestion
  public addExamQuestion(examQuestion: any): Observable<any> {
    return this.http.post( `http://localhost:8080/addExamQuestion`, examQuestion);
  }
}
