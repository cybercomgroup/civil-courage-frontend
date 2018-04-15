import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/API/api.service';
import { Scenario } from 'app/models/scenario';
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
    //setInterval(function () {
    //  location.reload();
    //}, 10000);
  }

  createScenarioDialogue(data) {
    
    $("#createScenarioTitle").text(data.description);
    $("#createScenarioInfo").text(data.description);
    $("#scenarioEventId").val(data.id);
  }

  sendInfo() {
    debugger;
    var scenario = new Scenario();
    scenario.severity = $("#scenarioLevel").val();
    scenario.event_id = $("#scenarioEventId").val();
    scenario.append_text = $("#scenarioText").val();
    scenario.dateTime = Date.now();
    let api = new ApiService();
    api.createScenario(scenario);
  }

}
