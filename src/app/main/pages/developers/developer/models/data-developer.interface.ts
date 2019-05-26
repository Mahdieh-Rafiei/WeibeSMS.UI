import {ValidIpsInterface} from './valid-ips.interface';

export interface DataDeveloperInterface {
  id: number;
  isActive: boolean;
  key: string;
  title: string;
  validIps: ValidIpsInterface[];
}
