import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http: Http) { }

  addOption(option: any): Observable<any> {
    console.log(JSON.stringify(option))
    return this.http.post( `http://localhost:8080/addOption`, option);
  }
}
