import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/API/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let api = new ApiService();
    api.getLatestEvents();
  }

}
