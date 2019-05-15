import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `
    <div class="mt-2">
      <p class="text-right" *ngIf="!disableConfirm">We will send you in : {{countDown}}</p>
      <p class="text-right cp" *ngIf="disableConfirm" (click)="resendCode()"><img src="../../assets/images/redo.png"> Resend again</p>
    </div>
  `,
  styles: []
})
export class CountDownComponent implements OnInit {
  endTime;
  countDown;
  disableConfirm: boolean = false;

  @Output() countDownEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  ngOnInit() {
    this.countdown(2, 0);
  }

  countdown(minutes, seconds) {
    this.endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    this.updateTimer();
  }

  updateTimer() {
    const msLeft = this.endTime - (+new Date);
    if (msLeft < 1000) {
      this.disableConfirm = true;
      this.countDown = '00:00';
    } else {
      const time = new Date(msLeft);
      const minutes = time.getUTCMinutes();
      const seconds = time.getUTCSeconds();
      const getUTCMilliseconds = time.getUTCMilliseconds();
      this.countDown = (minutes <= 9 ? '0' + minutes : minutes)
        + ':' + (seconds <= 9 ? '0' + seconds : seconds);
      setTimeout(this.updateTimer, getUTCMilliseconds + 500);
    }
  }

  resendCode() {
    this.countdown(2, 0);
    this.disableConfirm = false;
    this.countDownEmit.emit(true);
  }
}
