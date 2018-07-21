import {Component, OnInit} from '@angular/core';
import {AlertsServiceService} from "./alerts-service.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public data$: Observable<void> | Observable<any>;

  constructor(private alertsServiceService: AlertsServiceService) {

  }

  ngOnInit(): void {
  this.data$=  this.alertsServiceService.getData();
  }
}
