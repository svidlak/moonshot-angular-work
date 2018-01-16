import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-reviews',
  templateUrl: './mobile-reviews.component.html',
  styleUrls: ['./mobile-reviews.component.sass']
})
export class MobileReviewsComponent {
  @Input() reviews: Array<object>;
  reviewerImage: string = "assets/Profile_Small.png";
  reviewerIndex: number = 0;

  constructor() { }

  incReviewIndex(){
    const inc = this.reviewerIndex+1
    if(inc >= this.reviews.length){
      this.reviewerIndex = 0;
    } else {
      this.reviewerIndex++;
    }
  }
  
  decReviewIndex(){
    const dec = this.reviewerIndex-1
    if(dec <= 0){
      this.reviewerIndex = 0;
    } else {
      this.reviewerIndex--;
    }
  }
}
