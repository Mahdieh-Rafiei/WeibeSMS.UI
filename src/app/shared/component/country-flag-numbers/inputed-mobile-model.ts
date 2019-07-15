import {DataCountryInterface} from '../../models/data-country.interface';

export interface InputedMobileModel {
  country: DataCountryInterface;
  mobile: string;
  isCorrectMobile: boolean;
}
