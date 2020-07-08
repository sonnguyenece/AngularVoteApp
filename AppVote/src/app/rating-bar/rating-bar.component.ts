import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isOnClick = false;

  // @Output()
  ratingIndex: number;
  saveIndex: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(rate: number) {
    this.ratingIndex = rate;
  }

  whenMouseOut() {
    if (this.isOnClick) {
      this.ratingIndex = this.saveIndex;
    } else {
      this.ratingIndex = 0;
    }
  }

  onClick(rate: number) {
    this.ratingIndex = rate;
    this.saveIndex = rate;
    this.isOnClick = true;
  }
}
