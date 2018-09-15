import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material"
import { AreYouSureComponent } from '../are-you-sure/are-you-sure.component'

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deliverablesToPick = [
    {
      pickUpLocation: "dhaka",
      pickUpTime: new Date(),
      lat: 23.75,
      lng: 90.36
    },
    {
      pickUpLocation: "dhaka",
      pickUpTime: new Date(),
      lat: 1.23,
      lng: 2.54
    },
    {
      pickUpLocation: "dhaka",
      pickUpTime: new Date(),
      lat: 1.23,
      lng: 2.54
    },
    {
      pickUpLocation: "dhaka",
      pickUpTime: new Date(),
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
