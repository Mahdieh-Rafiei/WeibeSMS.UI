import {Gender} from './gender.enum';

export interface ProfileInterface {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  gender: Gender;
  phone: number;
  defaultPrefix: number;
  country: string;
  birthday: number;
}
