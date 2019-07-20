import {DataCityInterface} from './data-city.interface';

export interface DataCountryInterface {
  id: number;
  name: string;
  prefixNumber: string;
  flag: string;
  states: DataCityInterface[];
}
