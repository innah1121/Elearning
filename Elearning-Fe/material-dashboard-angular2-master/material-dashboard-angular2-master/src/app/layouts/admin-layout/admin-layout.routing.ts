import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LecturerListComponent } from 'app/lecturer-list/lecturer-list.component';
import { StudentListComponent } from 'app/student-list/student-list.component';
import { CourseListComponent } from 'app/course-list/course-list.component';
import { ExamDetailComponent } from 'app/exam-detail/exam-detail.component';
import { ExamListComponent } from 'app/exam-list/exam-list.component';
import { LoginComponent } from 'app/login/login.component';
import { AppAuthGuardService } from 'app/service/app-auth-guard.service';
import { StudentCoursesComponent } from 'app/student-courses/student-courses.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    
    { path: 'studentet',      component: StudentListComponent ,canActivate: [AppAuthGuardService], 
    data: { 
      expectedRole: 1
    } 
    },
    { path: 'pedagoget',      component: LecturerListComponent  },
    { path: 'profili',   component: UserProfileComponent  },
    { path: 'kurset',      component: CourseListComponent  },
    { path: 'test',      component: ExamDetailComponent  },
    { path: 'kursetEStudentit',      component: StudentCoursesComponent  },
    { path: 'table-list',     component: TableListComponent  },
    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
   // { path: 'upgrade',        component: UpgradeComponent },
];
