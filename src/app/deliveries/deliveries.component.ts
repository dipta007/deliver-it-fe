import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppRestService } from '../app.rest.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  constructor(private appRestService: AppRestService) { }

  deliveryRequests = []
  ngOnInit() {
      this.appRestService.getAllDeliveries().subscribe(res => {
        res.forEach(item => {
          var tmp = <any>{};
          tmp.pickUpLocation = item.pickUpLocation;
          tmp.pickUpTime = item.pickUpTime;
          tmp.dropOffLocation = item.dropOffLocation;
          tmp.dropOffTime = item.dropOffTime;
          tmp.status = item.status;

          this.deliveryRequests.push(tmp)
        });
        debugger
      })
  }

  // TODO:
  // UI issue in this page



}
