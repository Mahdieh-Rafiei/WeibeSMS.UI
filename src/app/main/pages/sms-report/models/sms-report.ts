export interface SmsReport {
  id: number;
  messageText: string;
  recipients: number;
  senderLine: string;
  senderType: number;
  sendStatus: number;
  sendDateTime: Date;
  isBulk: boolean
}
