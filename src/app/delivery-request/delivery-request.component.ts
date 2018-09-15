import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material"
import {AreYouSureComponent} from "../are-you-sure/are-you-sure.component"

@Component({
  selector: 'app-delivery-request',
  templateUrl: './delivery-request.component.html',
  styleUrls: ['./delivery-request.component.css']
})
export class DeliveryRequestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deliveryRequests = [
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

  applyForIt(product: any) {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      width: '600px',
      data: {status: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.status) {
        // TODO:
      }
    })
  }
}
