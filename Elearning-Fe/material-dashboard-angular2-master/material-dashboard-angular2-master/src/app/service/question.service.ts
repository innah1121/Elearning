import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url: string;
  
  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }
  
  public findAllQuestionsByCourse(courseId : number) : Observable<any>  {
    return this.http.get(`${this.url}/questions/${courseId}` );
  }

  public getById(id : number) : Observable<any>  {
    return this.http.get(`${this.url}/question/${id}` );
  }

  createQuestion(question:any):Observable<any>{
    return this.http.post(  this.url + `/createQuestion`,question);
  }
}
