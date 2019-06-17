import {EventsUserContactInterface} from './events-user-contact.interface';

export interface DataGetContactInterface {
  creationDateTime: Date;
  email: string;
  firstName: string;
  gender: number;
  id: number;
  lastName: string;
  mobile: string;
  eventsUser: EventsUserContactInterface[];
}
