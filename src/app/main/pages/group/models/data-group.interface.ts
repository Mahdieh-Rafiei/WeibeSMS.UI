import {ContactsGroupInterface} from './contacts-group.interface';

export interface DataGroupInterface {
  contacts: ContactsGroupInterface;
  contactsCount: number;
  creationDateTime: Date;
  groupName: string;
  id: number;
}
