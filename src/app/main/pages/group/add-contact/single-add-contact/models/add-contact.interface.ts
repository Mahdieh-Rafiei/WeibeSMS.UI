import {EventUserAddContactInterface} from './event-user-add-contact.interface';

export interface AddContactInterface {
  contactGroupId: number;
  email: string;
  firstName: string;
  gender: number;
  lastName: string;
  mobile: string;
  eventsUser: EventUserAddContactInterface[];
  prefixNumberId: number;

}
