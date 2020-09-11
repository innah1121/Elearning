import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUniversityService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public findUsersFacultyInfo(userId): Observable<any> {
    let params = new HttpParams()
     .set('userId', userId.toString());
    console.log(params.toString());
    return this.http.get(`http://localhost:8080/usersFacultyInfo` , {params:params});
  }

  public findUsersFacultyInformation(userId:number): Observable<any> {
    
    return this.http.get(`http://localhost:8080/usersFacultyInfo/${userId}`);
  }

}

