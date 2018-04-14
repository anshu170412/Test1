import { Injectable } from '@angular/core';
import{Http, Headers} from '@angular/http';
import { Student } from './student';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

// retrieving StudentService
	getStudent()
	{
		return this.http.get('http://localhost:3000/api/students')
		.map(res => res.json());	
	}
}
