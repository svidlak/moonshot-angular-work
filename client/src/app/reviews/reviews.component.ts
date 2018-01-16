import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent {

  @Input() reviews: Array<object>;
  @Input() about: Array<object>;
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
