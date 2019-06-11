import {EventUserAddContactInterface} from './event-user-add-contact.interface';

export interface AddContactInterface {
  contactGroupId: number;
  Email: string;
  FirstName: string;
  Gender: number;
  LastName: string;
  Mobile: string;
  eventsUser: EventUserAddContactInterface[];

}
