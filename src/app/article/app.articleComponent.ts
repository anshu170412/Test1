import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'article',
  templateUrl: './app.article.html',
  styleUrls: ['./app.article.css'],
  providers: [StudentService]
})
export class articleComponent implements OnInit {
 
  students: Student[];
  student: Student;
  Tenant_Id:string;
  Name:string;
  Class:string;
  Subject:string;
  Section:string;
  Grade:string;
  Quater:string;
  color:string;

 constructor(private studentService: StudentService){}

 ngOnInit() {
  this.studentService.getStudent()
   .subscribe( students=>
    this.students = students);
  }
}