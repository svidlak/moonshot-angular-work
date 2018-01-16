import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Doctor } from './Doctor';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <app-header></app-header>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  doctorsSub: Subscription;
  error: any;

  locations: Subscription;
  locationsArr: Array<any> = [];

  constructor(
    public doctorsService: DoctorsService
  ) { }


  ngOnInit() {
    if(!localStorage.doctors){
      this.getDoctorsList();
    }
  }

  getDoctorsList(){
    this.doctorsSub = this.doctorsService
    .getPublicDoctors()
    .subscribe( data => {
      localStorage.setItem("doctors", JSON.stringify(data));
      localStorage.setItem("locations", JSON.stringify([]));
      data.forEach( ele => {
        this.getLocations(ele.address)
      })
    }, err => this.error = err
    );  
  }
  
  getLocations(address){
    this.locations = this.doctorsService
      .getListOfLats(address)
      .subscribe( location => {
          this.locationsArr.push(location.results[0].geometry.location)
          localStorage.locations = JSON.stringify(this.locationsArr);
        },
        err => this.error = err
      );
  }

  ngOnDestroy() {
    this.doctorsSub.unsubscribe();
    this.locations.unsubscribe();
  }

}
