import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material"
import {AreYouSureComponent} from "../are-you-sure/are-you-sure.component"
import { AppRestService } from '../app.rest.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-delivery-approval',
  templateUrl: './delivery-approval.component.html',
  styleUrls: ['./delivery-approval.component.css']
})
export class DeliveryApprovalComponent implements OnInit {

  constructor(private router: Router,
              public dialog: MatDialog,
              private appRestService: AppRestService) { }

  deliveryRequests = []
  ngOnInit() {
    this.appRestService.getPendingDeliveries().subscribe(res => {
      debugger
      res.forEach(item => {
        var tmp = <any>{};
        tmp.pickUpLocation = item.pickUpLocation;
        tmp.pickUpTime = item.pickUpTime;
        tmp.dropOffLocation = item.dropOffLocation;
        tmp.dropOffTime = item.dropOffTime;
        tmp.delivererId = item.delivererId;
        tmp._id = item._id;

        this.deliveryRequests.push(tmp);
      });
    })
  }

  goToProfileDetails(product: any) {
    this.router.navigate(['/user', product.delivererId])
  }

  approve(product: any) {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      width: '600px',
      data: {status: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.status) {
        this.appRestService.changeDeliveryRequestStatus(product._id, "assigned").subscribe(res => {
          this.ngOnInit()
        })
      }

    })
  }
}
