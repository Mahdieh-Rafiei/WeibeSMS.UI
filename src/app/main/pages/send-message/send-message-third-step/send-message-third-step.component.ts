import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';
import {DataSendMessage} from '../models/data-send-message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-message-third-step',
  templateUrl: './send-message-third-step.component.html',
  styleUrls: ['./send-message-third-step.component.scss']
})
export class SendMessageThirdStepComponent implements OnInit {

  dataSendMessage: DataSendMessage;

  constructor(private sendMessageService: SendMessageService,
              private router :Router) {
  }

  ngOnInit() {
    if (this.sendMessageService.messageModel.messageText.length == 0){
      this.router.navigateByUrl('send-message/first-step');
      return;
    }

    this.sendMessageService.sendMessage(false)
      .subscribe(res => {
        this.dataSendMessage = res.data;
      })
  }
}
