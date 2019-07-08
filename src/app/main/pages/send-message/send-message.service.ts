import { Injectable } from '@angular/core';
import {MessageModel} from './models/message.model';

@Injectable({
  providedIn: 'root'
})

export class SendMessageService {

  step=1;
  messageModel:MessageModel;
  constructor() { }
}
