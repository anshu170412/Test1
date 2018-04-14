import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';		
import * as d3 from 'd3';
@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalChartComponent implements OnInit {

@ViewChild('horizontalchartbar') private chartContainer: ElementRef;		  
@Input() private data: Array<any>;		  
private margin: any = { top: 20, bottom: 20, left: 20, right: 20};		  
private chart: any;		  
private width: number;		  
private height: number;		  
private xScale: any;		  
private yScale: any;		  
private colors: any;		  
private xAxis: any;		  
private yAxis: any;
private xLabel: any;
private yLabel: any;

  constructor() { }

  ngOnInit() {

  // this.createChart();
  if (this.data) {	
  	      //this.updateChart();
  }

  }

  ngOnChanges() {
  		    if (this.chart) {
  		    		      //this.updateChart();
    		      		    }
    		  	}



}
