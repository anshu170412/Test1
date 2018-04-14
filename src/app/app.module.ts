import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { profileComponent } from './Profile/app.profileComponent';
import { landingpageComponent } from './landingPage/app.landingpageComponent';
import { articleComponent } from './article/app.articleComponent';
import { footerComponent } from './footer/app.footerComponent';
import { academicsComponent } from './article/Cards/Academics/app.academicsComponent';
import { sportsComponent } from './article/Cards/Sports/app.sportsComponent';
import { attendanceComponent } from './article/Cards/Attendance/app.attendanceComponent';
import { culturalComponent } from './article/Cards/Cultural/app.culturalComponent';
import { digitaldiaryteacherComponent } from './article/Cards/DigitalDiaryTeacher/app.digitaldiaryteacherComponent';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { AssessmentChartComponent } from './ChartComponents/assessment-chart/assessment-chart.component';
import { StudentDetailsComponent } from './basic-details/student-details/student-details.component';
import { HorizontalChartComponent } from './shared/horizontal-chart/horizontal-chart.component';

const appRoutes: Routes=[
{ path: 'profile', component: profileComponent },
{ path: 'attendance', component: AssessmentChartComponent },
{ path: 'home', component: landingpageComponent },
{ path: '' , redirectTo: '/profile', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    profileComponent,
    landingpageComponent,
    articleComponent,
    footerComponent,
    academicsComponent,
    sportsComponent,
    attendanceComponent,
    culturalComponent,
    digitaldiaryteacherComponent,
    BarChartComponent,
    AssessmentChartComponent,
    StudentDetailsComponent,
    HorizontalChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
     HttpModule,
    HttpClientModule,
    VirtualScrollModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
