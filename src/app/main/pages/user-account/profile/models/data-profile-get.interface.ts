import {Gender} from './gender.enum';

export interface DataProfileGetInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  defaultPrefix: number;
  birthDay: number;
  companyName: string;
  countryId: number;
  image: any;
  mobile: number;
}
