import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deliveryRequests = [
    {
      pickUpLocation: "chittagong",
      pickUpTime: new Date(),
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 23.75,
      lng: 90.36,
      status: "Pending"
    },
    {
      pickUpLocation: "chittagong",
      pickUpTime: new Date(),
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 23.75,
      lng: 90.36,
      status: "Delivered"
    },
    {
      pickUpLocation: "chittagong",
      pickUpTime: new Date(),
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 23.75,
      lng: 90.36
    },
    {
      pickUpLocation: "chittagong",
      pickUpTime: new Date(),
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 23.75,
      lng: 90.36
    }
  ]

}
