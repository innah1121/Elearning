import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private universitiesUrl: string;
 
  constructor(private http: Http) {
    this.universitiesUrl = 'http://localhost:8080';
  }
  
  public findAllUniversities()  {
    return this.http.get(`${this.universitiesUrl}/universities`);
  }
}
