import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';
import {SendSmsLineView} from '../models/send-sms-line-view';
import {GetUserActiveLineResponse} from '../models/get-user-active-line-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-message-second-step',
  templateUrl: './send-message-second-step.component.html',
  styleUrls: ['./send-message-second-step.component.scss']
})
export class SendMessageSecondStepComponent implements OnInit {

  constructor(public sendMessageService: SendMessageService,
              private router:Router) {
  }

  sendSmsLines: SendSmsLineView[];

  ngOnInit() {
    if (this.sendMessageService.messageModel.messageText.length == 0){
      this.router.navigateByUrl('send-message/first-step');
    }

    this.sendMessageService.getActiveLines()
      .subscribe((res: GetUserActiveLineResponse) => {
        this.sendSmsLines = res.data;
        this.sendMessageService.messageModel.lineConfig = this.sendSmsLines[0];
      });
  }

  setLine(e) {
    this.sendMessageService.messageModel.lineConfig =
      this.sendSmsLines.find(res => res.id == e.target.value);
  }

  setApiModel(e: Map<number, number[]>) {
    this.sendMessageService.messageModel.contacts = e;
  }

  setGroups(e:any[]){
    this.sendMessageService.messageModel.groups = e;
  }
}
