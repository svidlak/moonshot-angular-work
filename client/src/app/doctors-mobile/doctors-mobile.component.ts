import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctors-mobile',
  templateUrl: './doctors-mobile.component.html',
  styleUrls: ['./doctors-mobile.component.sass']
})
export class DoctorsMobileComponent {

  @Input() doctor: object;
  @Input() index: number;
  doctorImage: String = 'assets/Profile_Big.png';
  reviews: boolean = false;
  about: boolean = false;
  constructor() { }

  showReviews(){
    this.about = false;
    if(this.reviews){
      this.reviews = false;
    } else {
      this.reviews = true;
    }
  }

  showAbout(){
    this.reviews = false;
    if(this.about){
      this.about = false;
    } else {
      this.about = true;
    }
  }
}
