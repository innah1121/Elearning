import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private url: string;
 
  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public findTypeById(typeId:number): Observable<any> {
    return this.http.get(`http://localhost:8080/typeById/${typeId}`);
  }
  
  public getAllTypes()  {
    return this.http.get(`${this.url}/types`);
  }
}
