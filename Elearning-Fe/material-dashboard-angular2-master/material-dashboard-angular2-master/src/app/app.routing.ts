import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthService } from 'app/service/app-auth.service';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppAuthGuardService } from './service/app-auth-guard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  //{ path: '', component: LoginComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    canActivate: [AppAuthGuardService]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      // useHash: true
    }),
    HttpClientModule
  ],
  exports: [],
  
})
export class AppRoutingModule { }
