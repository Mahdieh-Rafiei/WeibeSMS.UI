import {Gender} from '../../shared/enums';

export interface Contact {
  Id:number;
  FirstName:string;
  LastName:string;
  Mobile:number;
  Email:string;
  Gender: Gender
}
