import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number = 0;

  constructor() {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  getCounter() {
    return this.counter;
  }
}
