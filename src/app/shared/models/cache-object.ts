import {DataCountryInterface} from './data-country.interface';
import {DataCityInterface} from './data-city.interface';
import {DashboardInfoInterface} from '../../auth/login/models/dashboard-info.interface';

export interface CacheObject {
  countries:DataCountryInterface[];
  cities:DataCityInterface[];
  currentUserInfo:DashboardInfoInterface;
}
