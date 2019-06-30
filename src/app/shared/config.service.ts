import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  baseUrl: string;
  globalUrl: string;
  tokenKeyName: string;
  errorMessages: Map<number, string> = new Map<number, string>();
  sidebarMode: string = 'default';
  documentationUrl = '';

  @Output() authenticationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.tokenKeyName = 'jwt-sms';
    this.documentationUrl = 'http://localhost:8090/swagger/index.html';

    // this.baseUrl = 'https://localhost:44315/app/api/';
    // this.globalUrl = 'https://localhost:44315/api/';

    // this.baseUrl = 'http://185.211.58.52/app/api/';
    // this.baseUrl = 'http://185.211.58.52/appapi/v1/';

    this.baseUrl = 'http://192.168.1.90:8070/app/api/';
    this.globalUrl = 'http://192.168.1.90:8070/api/';

    this.errorMessages.set(1, 'Entered values are wrong!');
    this.errorMessages.set(2, 'Get verification code again please!');
    // this.errorMessages.set(3,'Entered values are wrong!');
    this.errorMessages.set(4, 'Please use the last verification code!');
    this.errorMessages.set(5, 'Verification code is wrong!');
    this.errorMessages.set(6, 'Verification code is expired!');
    //TODO: this.errorMessages.set(8,'');
    this.errorMessages.set(7, 'User not found!');
    this.errorMessages.set(10, 'Username cant be null!');
    this.errorMessages.set(11, 'Password cant be null!');
    this.errorMessages.set(12, 'Verification Key Is InValid'); //TODO:he is hacker
    this.errorMessages.set(13, 'User with this mobile number is exists!');
    this.errorMessages.set(14, 'First name cant be null!');
    this.errorMessages.set(15, 'Last name cant be null');
    this.errorMessages.set(16, 'User name is invalid! It should has 8 characters at least!');
    this.errorMessages.set(17, 'Email is invalid!');
    this.errorMessages.set(18, 'User name is exists! please choose another user name');
    this.errorMessages.set(19, 'Password is invalid!It should has at least 8 characters,contains digits, capitals and lowercase letters!');
    this.errorMessages.set(20, 'plan');
    this.errorMessages.set(21, 'plan');
    this.errorMessages.set(22, 'User already saved infos!'); //TODO:he is hacker
    this.errorMessages.set(23, 'User name is exists! Please choose another user name');
    this.errorMessages.set(24, 'Your line number is not active!');
    this.errorMessages.set(25, 'Your line number is expired!');
    this.errorMessages.set(26, 'Your text contains forbidden words!');
    this.errorMessages.set(27, 'Your user is not verified'); //TODO: redirect to register form
    this.errorMessages.set(28, 'verification code reason!'); //TODO: he is hacker or front-end bug
    this.errorMessages.set(29, 'Contact group not found!'); //TODO: hacker or bug
    this.errorMessages.set(30, 'Contact group name cant be null!');
    this.errorMessages.set(31, 'ContactGroupId is wrong!');
    this.errorMessages.set(32, 'Contact not found!');
    this.errorMessages.set(33, 'Contact already is exists in this group!');
    this.errorMessages.set(34, 'File is empty!');
    this.errorMessages.set(35, 'Message text is empty!');
    this.errorMessages.set(36, 'Any contacts defined!');
    this.errorMessages.set(37, 'Line number is empty!');
    this.errorMessages.set(38, 'Line number not found!');
    this.errorMessages.set(39, 'Line number is not yours!');
    this.errorMessages.set(40, 'Contact is not yours!');
    this.errorMessages.set(41, 'ContactGroup is not yours!');
    this.errorMessages.set(42, 'Contact is deleted!');
    this.errorMessages.set(43, 'User event name is invalid!');
    this.errorMessages.set(44, 'User event not found!');
    this.errorMessages.set(45, 'User event is not yours!');
    this.errorMessages.set(46, 'Some users have data with this event!');
    this.errorMessages.set(47, 'User event used in sending!');
    this.errorMessages.set(48, 'Title or message is wrong!');
    this.errorMessages.set(49, 'Draft message not found!');
    this.errorMessages.set(50, 'This draft message is not yours!'); //TODO: bug
    this.errorMessages.set(66, 'Username or password is wrong!');
    // this.errorMessages.set(88, 'Send verification email allowed per 30 minutes!');
    this.errorMessages.set(90, 'Sender name should be unique!');
    this.errorMessages.set(104, 'Deactivation allowed just per 24 hours!');
    this.errorMessages.set(117, 'Title should be unique!');
    this.errorMessages.set(118, 'Password is wrong!');
    this.errorMessages.set(119, 'Current password is wrong!');

  }
}
