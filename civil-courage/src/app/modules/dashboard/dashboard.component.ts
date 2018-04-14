import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/API/api.service';
import * as $ from 'jquery';

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
    this.eventList = api.getLatestEvents();
  }

  createScenarioDialogue(data) {
    $("#createScenarioTitle").text(data.description);
    $("#createScenarioInfo").text(data.description);
  }
}
