import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';




@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [BsDatepickerModule, TimepickerModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent
 {
  myTime: Date = new Date();
  showMin = true;
  showSec = true;
 
  toggleMinutes(): void {
    this.showMin = !this.showMin;
  }
 
  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }
 
  
}
