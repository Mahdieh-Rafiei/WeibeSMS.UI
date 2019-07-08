import { Component, OnInit } from '@angular/core';
import {SendMessageService} from '../send-message.service';

@Component({
  selector: 'app-send-message-second-step',
  templateUrl: './send-message-second-step.component.html',
  styleUrls: ['./send-message-second-step.component.scss']
})
export class SendMessageSecondStepComponent implements OnInit {

  constructor(private sendMessageService:SendMessageService) { }

  ngOnInit() {
    this.sendMessageService.step = 2;
  }

}
