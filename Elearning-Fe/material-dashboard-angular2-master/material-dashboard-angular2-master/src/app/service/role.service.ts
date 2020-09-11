import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private rolesUrl: string;
 
  constructor(private http: Http) {
    this.rolesUrl = 'http://localhost:8080';
  }
  
  public findAllRoles()  {
    return this.http.get(`${this.rolesUrl}/roles`);
  }
  
  
}
