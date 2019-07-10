import {LineConfig} from './line-config';

export class MessageModel {
  messageText: string;
  isMaxLenValid: boolean;
  lineConfig: LineConfig;
  contacts: Map<number, number[]>;

  constructor(messageText: string) {
    this.messageText = messageText;
    this.lineConfig = new LineConfig();
  }
}
