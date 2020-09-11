import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'app/model/User';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
    
  }
  
  authenticate(email : string, password :string) {
    let params = new HttpParams()
    .set('email',email)
    .set('password',password)
    return this.httpClient.get<any>('http://localhost:8080/authenticate',{params}).pipe(
     map(
       user => {
        if(user){
          // store user details  in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        
        return user;
       }
     )
    );
  }
 
  isUserLoggedIn() {
    let user = sessionStorage.getItem('currentUser')
    return !(user === null)
  }
  logOut() {
   // remove user from local storage to log user out
   localStorage.removeItem('currentUser');
   this.currentUserSubject.next(null);
  }

  
}
