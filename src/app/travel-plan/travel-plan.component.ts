/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from "@agm/core"
import { Router } from '@angular/router'

@Component({
  selector: 'app-travel-plan',
  templateUrl: './travel-plan.component.html',
  styleUrls: ['./travel-plan.component.css']
})
export class TravelPlanComponent implements OnInit {
  
  @ViewChild("searchFrom")
  public searchElementFrom: ElementRef;
  
  @ViewChild("searchTo")
  public searchElementTo: ElementRef;
  
  constructor(private mapsApiLoader: MapsAPILoader,
              private ngZone: NgZone,
              private router: Router) { 
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.fromLoc.markerLat = this.fromLoc.lat = (+pos.coords.latitude);
        this.fromLoc.markerLng = this.fromLoc.lng = +pos.coords.longitude;
        this.fromLoc.markedInMap = true;

        this.toLoc.lat = (+pos.coords.latitude);
        this.toLoc.lng = +pos.coords.longitude;
        // this.toLoc.markedInMap = true;
      });
    }

    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementFrom.nativeElement, {
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
          this.fromLoc.markerLat = this.fromLoc.lat = place.geometry.location.lat();
          this.fromLoc.markerLng = this.fromLoc.lng = place.geometry.location.lng();
          this.fromLoc.markedInMap = true;
        });
      });
    })

    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementTo.nativeElement, {
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
          this.toLoc.markerLat = this.toLoc.lat = place.geometry.location.lat();
          this.toLoc.markerLng = this.toLoc.lng = place.geometry.location.lng();
          this.toLoc.markedInMap = true;
        });
      });
    })
  }
  
  ngOnInit() {
  }
  

  fromLoc = {
    srcTxt: "",
    lat: 1.2,
    lng: 3.4,
    markedInMap: false,
    markerLat: 1.2,
    markerLng: 3.4,
    circleRadius: 200, // meter
    date: Date
  }

  clickOnMapFrom(event) {
    this.fromLoc.markedInMap = true;
    this.fromLoc.markerLat = event.coords.lat;
    this.fromLoc.markerLng = event.coords.lng;
  }

  changeRadiusFrom(rad) {
    this.fromLoc.circleRadius = rad;
  }

  addEvent(type, event) {
    if(type == 'start') this.fromLoc.date = event.value;
    else this.toLoc.date = event.value;
  }


  toLoc = {
    srcTxt: "",
    lat: 1.2,
    lng: 3.4,
    markedInMap: false,
    markerLat: 1.2,
    markerLng: 3.4,
    circleRadius: 200, // meter
    date: Date
  }

  clickOnMapTo(event) {
    this.toLoc.markedInMap = true;
    this.toLoc.markerLat = event.coords.lat;
    this.toLoc.markerLng = event.coords.lng;
  }

  changeRadiusTo(rad) {
    this.toLoc.circleRadius = rad;
  }

  prepare() {
    return {
      from: {
        lat: this.fromLoc.lat,
        lng: this.fromLoc.lng,
        rad: this.fromLoc.circleRadius,
        time: this.fromLoc.date
      },
      to: {
        lat: this.toLoc.lat,
        lng: this.toLoc.lng,
        rad: this.toLoc.circleRadius,
        time: this.toLoc.date
      }
    }
  }

  canDeliver = [];

  find() {

    

    this.router.navigate(['/delivery-request'])
  }

}
