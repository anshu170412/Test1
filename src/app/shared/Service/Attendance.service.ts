import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AttendanceService {
  constructor(private http: Http) { }
 
  getAttendance()
  {
    return this.http.get('http://localhost:4200/assets/attendance.json')
    .map(res => res.json());
  }
  }