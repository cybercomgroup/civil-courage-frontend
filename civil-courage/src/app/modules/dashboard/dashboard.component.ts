import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/API/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  eventList = [];

  constructor() { }

  ngOnInit() {
    let api = new ApiService();
    api.getLatestEvents();

  }
  /*
  getEventlist($event) {
    let val = $event.target.value
    this.api.getLatestEvents(val).subscribe(data => {this.getTabledata(data)},
      error => {
        console.log('Error occured On getEventlist');
      });
  }
  getTabledata(data) {
    if (data !== undefined || data !== null) {
      alert(JSON.stringify(data));
      this.eventList.push(data);
    }
  }*/

}
