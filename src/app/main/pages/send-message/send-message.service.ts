import {Injectable} from '@angular/core';
import {MessageModel} from './models/message.model';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {GetUserActiveLineResponse} from './models/get-user-active-line-response';
import {SendMessageResponse} from './models/send-message-response';

@Injectable({
  providedIn: 'root'
})

export class SendMessageService {

  step = 1;
  messageModel = new MessageModel('');

  constructor(private apiService: ApiService) {
  }

  getActiveLines(): Observable<GetUserActiveLineResponse> {
    const url = `line/UserActiveLine`;
    return this.apiService.get(url, true);
  }

  sendMessage(immediate: boolean): Observable<SendMessageResponse> {
    const url = 'sendMessage';
    const rows = {};
    this.messageModel.contacts.forEach((value, key) => {
      rows[key] = value;
    });

    const payload = {
      recipients: rows,
      messageText: this.messageModel.messageText,
      sendDateTime: 0,
      line: this.messageModel.lineConfig.line,
      immediate: immediate,
      senderType: this.messageModel.lineConfig.senderType
    };

    return this.apiService.post(url, payload, true);
  }
}
