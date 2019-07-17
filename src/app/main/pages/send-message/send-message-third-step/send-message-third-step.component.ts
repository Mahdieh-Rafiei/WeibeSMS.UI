import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';
import {DataSendMessage} from '../models/data-send-message';
import {Router} from '@angular/router';
import {MessageModel} from '../models/message.model';

@Component({
  selector: 'app-send-message-third-step',
  templateUrl: './send-message-third-step.component.html',
  styleUrls: ['./send-message-third-step.component.scss']
})
export class SendMessageThirdStepComponent implements OnInit {

  dataSendMessage: DataSendMessage;

  constructor(public sendMessageService: SendMessageService,
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

  send(){
    this.sendMessageService.sendMessage(true)
      .subscribe(res => {
        console.log(res);
        this.sendMessageService.messageModel = new MessageModel('');
        this.router.navigateByUrl('');
      })
  }
}
