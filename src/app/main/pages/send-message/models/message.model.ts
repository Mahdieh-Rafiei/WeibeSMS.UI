export class MessageModel {
  messageText: string;
  isMaxLenValid:boolean;
  constructor(messageText: string) {
    this.messageText = messageText;
  }
}
