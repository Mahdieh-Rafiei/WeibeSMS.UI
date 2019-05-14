import {TokenInterface} from './token.interface';

export interface LoginResponseInterface {
  data: TokenInterface;
  message: string;
}
