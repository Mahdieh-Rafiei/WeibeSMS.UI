import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';
import {Router} from '@angular/router';
import {MessageModel} from '../models/message.model';
import {DraftInterface} from '../../draft/draft/models/draft.interface';

@Component({
  selector: 'app-send-message-first-step',
  templateUrl: './send-message-first-step.component.html',
  styleUrls: ['./send-message-first-step.component.scss']
})
export class SendMessageFirstStepComponent implements OnInit {

  constructor(private sendMessageService: SendMessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.sendMessageService.step = 1;
    if (!this.sendMessageService.messageModel) {
      this.sendMessageService.messageModel = new MessageModel('');
    }
  }

  setDraft(draft: DraftInterface) {
    this.sendMessageService.messageModel.messageText = draft.messageText;
  }

  setMessageText(text: string) {
    this.sendMessageService.messageModel.messageText = text;
  }
}
