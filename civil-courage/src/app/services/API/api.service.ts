import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from 'app/models/Event';
import * as $ from 'jquery';

@Injectable()
export class ApiService {

  constructor() { }

 getLatestEvents() {
    $.ajax({
      type: "GET",
      url: "https://weyes9suzh.execute-api.eu-west-1.amazonaws.com/production/events",
      contentType: "application/json",
      success: function (data) {
        debugger;
        var eventList = [];
        for (var i = 0; i < data.length; i++) {
          debugger;
          let event = new Event;
          event.id = data[0].id;
          event.date = data[0].dateTime;
          event.description = data[0].name;
          event.type = data[0].type;
          event.location = data[0].location_name;
          event.url = data[0].url;

          eventList.push(event);
        }


        return eventList;
      },
      error: function (data) {
      }
    })
  }

}
