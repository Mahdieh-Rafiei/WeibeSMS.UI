import {Gender} from './gender.enum';

export interface DataInfoGetInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  defaultPrefixNumberId: number;
  birthDay: number;
  companyName: string;
  countryId: number;
  image: any;
  mobile: number;
}
