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
// export const ROUTES: RouteInfo[] = [
//     { path: '/studentet', title: 'Lista e studenteve',  icon: 'content_paste', class: '' , role: ['Admin'] },
//     { path: '/pedagoget', title: 'Lista e pedagogeve',  icon: 'content_paste', class: '' , role: ['Admin']},
//     { path: '/profili', title: 'Profili im',  icon: 'person', class: '' , role: ['Pedagog', 'Student']},
//     { path: '/kurset',  title: 'Kurset',  icon: 'content_paste', class: '' , role: ['Admin']},
//     { path: '/test',  title: 'Test',  icon: 'content_paste', class: '' , role: ['Pedagog']},
//     { path: '/kursetEStudentit',  title: 'Kurset e Mia',  icon: 'content_paste', class: '' , role: ['Student']},
// ];
export const adminROUTES: RouteInfo[] = [
       { path: '/studentet', title: 'Lista e studenteve',  icon: 'content_paste', class: ''  },
       { path: '/pedagoget', title: 'Lista e pedagogeve',  icon: 'content_paste', class: '' },
]
export const studentROUTES: RouteInfo[] = [
     { path: '/profili', title: 'Profili im',  icon: 'person', class: '' },
     { path: '/kursetEStudentit',  title: 'Kurset e Mia',  icon: 'content_paste', class: ''}
]
export const pedagogROUTES: RouteInfo[] = [
  { path: '/profili', title: 'Profili im',  icon: 'person', class: '' },
  { path: '/test',  title: 'Test',  icon: 'content_paste', class: '' },
  { path: '/kurset',  title: 'Kurset',  icon: 'content_paste', class: '' },
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  studentItems: any[];
  loggedUser: User;
  currentUserSubscription: Subscription;
  constructor(private authenticationService: AppAuthService) {}
  ngOnInit() {
    this.loggedUser = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.loggedUser)
    if (this.loggedUser.role.description === 'Pedagog') {
      this.menuItems = pedagogROUTES.filter(menuItem => menuItem);
    }
    if (this.loggedUser.role.description === 'Admin') {
      this.menuItems = adminROUTES.filter(menuItem => menuItem);
    }
    if (this.loggedUser.role.description === 'Student') {
      this.menuItems = studentROUTES.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
