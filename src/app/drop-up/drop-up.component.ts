import { Component, OnInit } from '@angular/core';
import { AreYouSureComponent } from '../are-you-sure/are-you-sure.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-drop-up',
  templateUrl: './drop-up.component.html',
  styleUrls: ['./drop-up.component.css']
})
export class DropUpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deliverablesToDrop = [
    {
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 23.75,
      lng: 90.36
    },
    {
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 1.23,
      lng: 2.54
    },
    {
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 1.23,
      lng: 2.54
    },
    {
      dropOffLocation: "dhaka",
      dropOffTime: new Date(),
      lat: 1.23,
      lng: 2.54
    }
  ]

  goToMap(lat, lng) {
    var googleUrl = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
    window.location.href = googleUrl;
    debugger
  }

  completeIt(product: any) {
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
