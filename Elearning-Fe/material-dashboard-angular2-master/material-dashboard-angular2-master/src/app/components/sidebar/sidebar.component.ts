import { Component, OnInit } from '@angular/core';
import { ExamDetailComponent } from 'app/exam-detail/exam-detail.component';
import { User } from 'app/model/User';
import { Subscription } from 'rxjs';
import { AppAuthService } from 'app/service/app-auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/studentet', title: 'Lista e studenteve',  icon:'content_paste', class: '' },
    { path: '/pedagoget', title: 'Lista e pedagogeve',  icon:'content_paste', class: '' },
    { path: '/profili', title: 'Profili im',  icon:'person', class: '' },
    { path: '/kurset',  title: 'Kurset',  icon:'content_paste', class: '' },
    { path: '/test',  title: 'Test',  icon:'content_paste', class: '' },
    { path: '/kursetEStudentit',  title: 'Kurset e Mia',  icon:'content_paste', class: '' },
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
   // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
   // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser: User;
  currentUserSubscription: Subscription;
  constructor(private authenticationService: AppAuthService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user)
        this.currentUser = user;
        console.log(this.currentUser)
    })
   }
  
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if(this.currentUser.role.id===1){

    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
