import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';		
//import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {

@ViewChild('chartbar') private chartContainer: ElementRef;		  
@Input() private data: Array<any>;
private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
private chart: any;
private width: number;
private height: number;
private xScale: any;
private yScale: any;		  
private colorsMarks: any;		  
private xAxis: any;		  
private yAxis: any;
private xLabel: any;
private yLabel: any;
  constructor() { }

  ngOnInit() {
  this.createChart();
  if (this.data) {	
  	      this.updateChart();
  }
  }

	  ngOnChanges() {
	  		    if (this.chart) {
	  		    		      this.updateChart();
	    		      		    }
	    		  	}



createChart() {
const element = this.chartContainer.nativeElement;		    
this.width = 300;		    
this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

const svg = d3.select(element).append('svg')		      
.attr('width', element.offsetWidth)		      
.attr('height', element.offsetHeight);

// chart plot area		    
this.chart = svg.append('g')		      
.attr('class', 'bars')		      
.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

 // define X & Y domains		    
 const xDomain = this.data.map(d => d[0]);		    
 const yDomain = [0, d3.max(this.data, d => d[1])];

 // create scales		    
 this.xScale = d3.scaleBand().padding(0.7).domain(xDomain).rangeRound([0, this.width]);		    
 this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

 // bar colors		    
 this.colorsMarks = d3.scaleLinear().domain([0, this.data.length]).range(<any[]>['red', 'blue','green']);		

 // x & y axis		    
 this.xAxis = svg.append('g')		      
 .attr('class', 'axis axis-x')		      
 .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)      
 .call(d3.axisBottom(this.xScale));		    
 this.yAxis = svg.append('g')		      
 .attr('class', 'axis axis-y')		      
 .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)		      
 .call(d3.axisLeft(this.yScale));	

 //x & y labels

this.xLabel =  svg.append('text')
.attr('class', 'xlabel')
.attr('text-anchor', 'start')
.attr('x', this.width/2)
.attr('y', 190 )
.text(' ');
 this. yLabel = svg.append('text')
.attr('class', 'ylabel')
.attr('text-anchor', 'end')
.attr('y', 6)
.attr('dy', '0.2em')
.attr('transform', 'rotate(-90)')
.text(' ');	  
 }


 

 updateChart() {
 // update scales & axis		    
 this.xScale.domain(this.data.map(d => d[0]));		    
 this.yScale.domain([0, d3.max(this.data, d => d[1])]);		    
 this.colorsMarks.domain([0, this.data.length]);	    
 this.xAxis.transition().call(d3.axisBottom(this.xScale));		    
 this.yAxis.transition().call(d3.axisLeft(this.yScale));

  const update = this.chart.selectAll('.bar')		      
  .data(this.data);

  // remove exiting bars		    
  // update.exit().remove();

   // update existing bars		    
   this.chart.selectAll('.bar').transition()		      
   .attr('x', d => this.xScale(d[0]))		      
   .attr('y', d => this.yScale(d[1]))		      
   .attr('width', d => this.xScale.bandwidth())		      
   .attr('height', d => this.height - this.yScale(d[1]))		      
   .style('fill', (d, i) => this.colorsMarks(i));


  // add new bars		    
  update		      
  .enter()		      
  .append('rect')		      
  .attr('class', 'bar')		      
  .attr('x', d => this.xScale(d[0]) - this.xScale.bandwidth()/2)		      
  .attr('y', d => this.yScale(0))		      
  .attr('width', this.xScale.bandwidth())		      
  .attr('height', 0)		      
  .style('fill', (d, i) => this.colorsMarks(i))		      
  .transition()		      
  .delay((d, i) => i * 10)		      
  .attr('y', d => this.yScale(d[1]))		      
  .attr('height', d => this.height - this.yScale(d[1]));		  
  
update		      
  .enter()		      
  .append('rect')		      
  .attr('class', 'bar')		      
  .attr('x', d => this.xScale(d[0]) + this.xScale.bandwidth()/2)		      
  .attr('y', d => this.yScale(0))		      
  .attr('width', this.xScale.bandwidth())		      
  .attr('height', 0)		      
  .style('fill', (d, i) => 'yellow')		      
  .transition()		      
  .delay((d, i) => i * 10)		      
  .attr('y', d => this.yScale(d[2]))		      
  .attr('height', d => this.height - this.yScale(d[2]));

  // add new bars		    
  //update		      
  //.enter()		      
  //.append('line')		      
  //.attr('class', 'line')		      
  //.attr('x1', d => this.xScale(d[0]))		      
  //.attr('y1', d => this.yScale(d[2]))
  // .attr('x2', d => this.xScale(d[0])+this.xScale.bandwidth())		      
  //.attr('y2', d => this.yScale(d[2]))
  //.style('stroke-width', 3)
  //.style('stroke', 'green');	  
  
}
 }