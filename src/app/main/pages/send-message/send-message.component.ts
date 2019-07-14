import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SendMessageService} from './send-message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit, AfterViewChecked {

  constructor(public sendMessageService: SendMessageService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
  }

  goToNextStep() {
    if (this.sendMessageService.step == 1) {
      if (this.sendMessageService.messageModel &&
        this.sendMessageService.messageModel.isMaxLenValid &&
        this.sendMessageService.messageModel.messageText.length > 0) {
        this.sendMessageService.step = 2;
        this.router.navigateByUrl(`send-message/second-step`);
      } else {

      }
    } else if (this.sendMessageService.step == 2) {
      this.sendMessageService.step = 3;
      this.router.navigateByUrl(`send-message/third-step`);
    }
  }

  goToPreviousStep() {
    switch (this.sendMessageService.step) {
      case 2:
        this.sendMessageService.step = 1;
        this.router.navigateByUrl(`send-message/first-step`);
        break;

      case 3:
        this.sendMessageService.step = 2;
        this.router.navigateByUrl(`send-message/second-step`);
    }
  }
}
