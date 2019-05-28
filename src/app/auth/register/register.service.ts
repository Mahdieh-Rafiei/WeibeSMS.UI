import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from '../login/models/send-verification-code-response.interface';
import {VerifyMobileResponseInterface} from '../login/models/verify-mobile-response.interface';
import {VerifyMobileInterface} from '../login/models/verify-mobile.interface';
import {RegisterInterface} from './models/register.interface';
import {RegisterResponseInterface} from './models/register-response.interface';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private apiService: ApiService) {

    }

    sendVerificationCode(payload): Observable<SendVerificationCodeResponseInterface> {
        const url = `Guest/SendVerificationCode`;
        return this.apiService.post<SendVerificationCodeInterface>(url, payload, false);
    }

    verifyMobile(payload): Observable<VerifyMobileResponseInterface> {
        const url = `Guest/VerifyMobile`;
        return this.apiService.post<VerifyMobileInterface>(url, payload, false);
    }

    saveInfo(payload): Observable<RegisterResponseInterface> {
        const url = `Guest/register`;
        return this.apiService.post<RegisterInterface>(url, payload, false);
    }
}
