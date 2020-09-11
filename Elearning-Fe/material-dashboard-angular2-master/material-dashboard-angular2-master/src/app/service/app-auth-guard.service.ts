import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { AppAuthService } from './app-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuardService  implements CanActivate {
  
  constructor(private router: Router,
              private authService: AppAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    var expectedRole = route.data.expectedRole;
    
   
    if (currentUser){
    // authorised so return true
      expectedRole = currentUser.role.id;
      console.log({"roliiii": expectedRole});
      return true;
      
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url }});
    return false;
    }

   

}
