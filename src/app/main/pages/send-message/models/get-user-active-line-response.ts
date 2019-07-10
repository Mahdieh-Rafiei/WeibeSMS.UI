import {SendSmsLineView} from './send-sms-line-view';

export interface GetUserActiveLineResponse {
  data: SendSmsLineView[];
  message: string;
}
