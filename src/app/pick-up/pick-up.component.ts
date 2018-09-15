import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material"
import { AreYouSureComponent } from '../are-you-sure/are-you-sure.component'
import { AppRestService } from '../app.rest.service'

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public appRestService: AppRestService) { }

  deliverablesToPick = []
  ngOnInit() {
    this.appRestService.getPickUp().subscribe(res => {
      res.forEach(item => {
        var tmp = <any>{};
        tmp.pickUpLocation = item.pickUpLocation;
        tmp.pickUpTime = item.pickUpTime;
        tmp._id = item._id;
        tmp.lat = item.pickUpCoord.lat;
        tmp.lng = item.pickUpCoord.lng;

        this.deliverablesToPick.push(tmp);
      });
    })
  }

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
        this.appRestService.changeDeliveryRequestStatus(product._id, "picked").subscribe(res => {
          this.deliverablesToPick.length = 0;
          this.ngOnInit();
        })
      }
    })
  }
}
