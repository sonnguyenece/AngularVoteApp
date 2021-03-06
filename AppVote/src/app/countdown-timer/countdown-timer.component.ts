import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input()
  startTime: number
  remainingTime: number;
  private interval: any;


  constructor() {
  }

  ngOnInit(): void {
    this.remainingTime = this.startTime;
  }

  resetTimer() {
    this.stopTimer();
    this.remainingTime = this.startTime;
  }

  startTimer() {
    if (!this.interval)
      this.interval = setInterval(this.minusOneSec.bind(this), 1000);
  }

  private minusOneSec(): void {
    this.remainingTime--;
    if (this.remainingTime <= 0) this.remainingTime = 0;
  };

  // because this doesn't refer to your original object in your callback when you invoke it that way. --
  // if you want this to work, you can declare your function as a lambda, like this:
  // private callback = () => { clearInterval(this.interval); }; -- you can call it from anywhere in your class
  // just like a regular method (even make it public), and then this will work correctly
  stopTimer() {
    if (this.interval) {
      console.log(this.interval)
      clearInterval(this.interval);
      console.log(this.interval)
      this.interval = false;
    }
  }
}
