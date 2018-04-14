		import { Component, OnInit  } from '@angular/core';
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

		@Component({
		  selector: 'app-root',
		  templateUrl: './app.component.html',
		  styleUrls: ['./app.component.css']
		})


		export class AppComponent implements OnInit {		 
		 private chartData: Array<any>;		
		  constructor() {}		


	  	ngOnInit() {		    
	 	setTimeout(() => {		      
	  		this.generateData();
	  		setInterval(() => this.generateData(), 3000);		    
	      }, 1000);		  
	      }

	      generateData() {		    
	      this.chartData = [];		    
	      for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {		      
	      this.chartData.push([		
	            
	      `Index ${i}`,		        
	      Math.floor(Math.random() * 100)		      
	      ]);		    
      		}		  
	      }
	      
}