/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from "@agm/core"
import { Router } from '@angular/router'
import {AppRestService} from '../app.rest.service'

export interface ProductRequestData {
  pickUpLocation: String,
  pickUpTime: Date,
  dropOffLocation: String,
  dropOffTime: Date,
  info: String,
  size: String,
  weight: Number,
  pickUpCoord: {
    lat: Number,
    lng: Number
  },
  dropOffCoord: {
    lat: Number,
    lng: Number
  }
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct = {
    pickUpLocation: "",
    pickUpTime: Date,
    dropOffLocation: "",
    dropOffTime: Date,
    info: "",
    size: "",
    weight: 0,
    pickUpCoord: {
      lat: 12,
      lng: 121
    },
    dropOffCoord: {
      lat: 12,
      lng: 12
    }
  };

  @ViewChild("pickUpSearch")
  public pickUpSearch: ElementRef;

  @ViewChild("dropOffSearch")
  public dropOffSearch: ElementRef;

  constructor(private mapsApiLoader: MapsAPILoader,
              private ngZone: NgZone,
              private router: Router,
              private appRestService: AppRestService) { 

    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.pickUpSearch.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          debugger
          this.newProduct.pickUpLocation = place.formatted_address;
          this.newProduct.pickUpCoord.lat = place.geometry.location.lat();
          this.newProduct.pickUpCoord.lng = place.geometry.location.lng();
        });
      });
    })

    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.dropOffSearch.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.newProduct.dropOffLocation = place.formatted_address;
          this.newProduct.dropOffCoord.lat = place.geometry.location.lat();
          this.newProduct.dropOffCoord.lng = place.geometry.location.lng();
        });
      });
    })
  }
  
  ngOnInit() {
  }

  addEvent(type, event) {
    if(type == "pickUp") this.newProduct.pickUpTime = event.value;
    else this.newProduct.dropOffTime = event.value;
  }

  addNewProduct() {
    this.appRestService.addNewDelivery(this.newProduct).subscribe(res => {
      // window.location.href 
      // delete this.newProduct
      // TODO:
    })
  }
}
