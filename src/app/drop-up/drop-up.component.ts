import { Component, OnInit } from '@angular/core';
import { AreYouSureComponent } from '../are-you-sure/are-you-sure.component'
import { MatDialog } from '@angular/material';
import { AppRestService } from '../app.rest.service';

@Component({
  selector: 'app-drop-up',
  templateUrl: './drop-up.component.html',
  styleUrls: ['./drop-up.component.css']
})
export class DropUpComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public appRestService: AppRestService) { }

  deliverablesToDrop = []
  ngOnInit() {
    this.appRestService.getDropUp().subscribe(res => {
      res.forEach(item => {
        var tmp = <any>{};
        tmp.dropOffLocation = item.dropOffLocation;
        tmp.dropOffTime = item.dropOffTime;
        tmp._id = item._id;
        tmp.lat = item.pickUpCoord.lat;
        tmp.lng = item.pickUpCoord.lng;

        this.deliverablesToDrop.push(tmp);
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
        // TODO:
        this.appRestService.changeDeliveryRequestStatus(product._id, "delivered").subscribe(res => {
          this.deliverablesToDrop.length = 0;
          this.ngOnInit();
        })
      }
    })
  }
}
