import { Component } from '@angular/core';
import  * as moment from 'moment';



@Component({
  selector: 'header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class headerComponent {
  public time:string = moment().format(); 
}


