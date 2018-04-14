import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/API/api.service';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  eventList = [];

  constructor() { }

  ngOnInit() {
    debugger;
    let api = new ApiService();
    this.eventList = api.getLatestEvents();
  }

  createScenarioDialogue(data) {
    debugger;
    $("#createScenarioInfo").title(data.text);
  }
  
}
