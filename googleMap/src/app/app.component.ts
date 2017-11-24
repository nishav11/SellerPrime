import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from './geo.service'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Dest {
  to: string;
  from: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  to : string;
  from : string;

  lat: number;
  lng: number;
  markers: any;
  subscription: any;
  constructor(private geo: GeoService) {

   }

   marker = this.seedDatabase();

  ngOnInit() {


    this.getUserLocation();

    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)


  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
       this.geo.getLocations(500, [this.lat, this.lng])
     });
   }
}

private seedDatabase() {
let dummyPoints = [
  [17.02714, 78.49168],
  [17.59001, 78.22152],
  [17.99504, 78.59667],
  [17.72382, 78.79905],
  [17.8990, 78.99220]
]
dummyPoints.forEach((val, idx) => {
  let name = `dummy-location-${idx}`
  console.log(idx)
  this.geo.setLocation(name, val)
})
}


  calcDistance() {


  }



}
