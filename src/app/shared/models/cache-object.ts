import {DataCountryInterface} from './data-country.interface';
import {DataCityInterface} from './data-city.interface';
import {UserInfoInterface} from '../../auth/login/models/user-info.interface';

export interface CacheObject {
  countries:DataCountryInterface[];
  cities:DataCityInterface[];
  currentUserInfo:UserInfoInterface;
}
