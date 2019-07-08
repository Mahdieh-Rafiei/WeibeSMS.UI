import {Component, OnInit} from '@angular/core';
import {SendMessageService} from '../send-message.service';

@Component({
  selector: 'app-send-message-third-step',
  templateUrl: './send-message-third-step.component.html',
  styleUrls: ['./send-message-third-step.component.scss']
})
export class SendMessageThirdStepComponent implements OnInit {

  constructor(private sendMessageService: SendMessageService) {
  }

  ngOnInit() {
    this.sendMessageService.step = 3;
  }
}
