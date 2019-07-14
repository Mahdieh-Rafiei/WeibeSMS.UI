import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';
import {DraftInterface} from '../../draft/draft/models/draft.interface';

@Component({
  selector: 'app-send-message-first-step',
  templateUrl: './send-message-first-step.component.html',
  styleUrls: ['./send-message-first-step.component.scss']
})
export class SendMessageFirstStepComponent implements OnInit {

  constructor(public sendMessageService: SendMessageService) {
  }

  ngOnInit() {
    this.sendMessageService.step = 1;
  }

  setDraft(draft: DraftInterface) {
    this.sendMessageService.messageModel.messageText = draft.messageText;
  }

  setMessageText(text: string) {
    this.sendMessageService.messageModel.messageText = text;
  }
}
