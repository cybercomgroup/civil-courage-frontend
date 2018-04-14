import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from 'app/models/Event';
import { Scenario } from 'app/models/scenario';
import * as $ from 'jquery';
import { scenarioType } from '@app/models/scenarioType';

@Injectable()
export class ApiService {

  constructor() { }

  getLatestEvents() {
    var eventList = [];
    $.ajax({
      type: "GET",
      url: "https://weyes9suzh.execute-api.eu-west-1.amazonaws.com/production/events",
      contentType: "application/json",
      success: function (data) {
        debugger;
        for (var i = 0; i < data.length; i++) {
          let event = new Event;
          event.id = data[i].id;
          event.date = data[i].dateTime;
          event.description = data[i].name;
          event.type = data[i].type;
          event.location = data[i].location_name;
          event.url = data[i].url;

          eventList.push(event);
        }


      },
      error: function (data) {
      }
    })
    return eventList;
  }

  createScenario(data) {
    $.ajax({
      type: "POST",
      url: "https://weyes9suzh.execute-api.eu-west-1.amazonaws.com/production/scenarios",
      contentType: "application/json",
      data: JSON.stringify(data),
      completed: function (data) {

      },
      success: function (result) {

      },
      error: function (data) {

      }
    })
  }
}
