import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-chart',
  templateUrl: './assessment-chart.component.html',
  styleUrls: ['./assessment-chart.component.css']
})
export class AssessmentChartComponent implements OnInit {
private chartData: Array<any>;	
private horizontalchartData: Array<any>;	

  constructor() { }

  ngOnInit() {		

	 	setTimeout(() => {		      
	  		this.generateData();
	  		setInterval(() => this.generateData(), 200000);		    
	      }, 1000);		  
	      }

	      generateData() {		    
	      this.chartData = [];
	      this.horizontalchartData = [];		    
	      for (let i = 0; i < 4; i++) {	
	       var num = Math.floor(Math.random() * 100);
	       var num2 = Math.floor(Math.random() * 100);      
	      this.chartData.push([
	      `${i+1}`,		        
	      num,
	      num2
	      ]);		    
      		}		  
	      }	      
}