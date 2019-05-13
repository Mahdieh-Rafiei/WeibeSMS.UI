import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../shared/config.service';
import {Immediate} from 'rxjs/internal-compatibility';
import {AddContactInterface} from '../add-contact/single-add-contact/models/add-contact.interface';
import {AddContactResponseInterface} from '../add-contact/single-add-contact/models/add-contact-response.interface';
import {GetContactInterface} from './models/get-contact.interface';
import {RemoveContactFormGroupInterface} from '../models/remove-contact-form-group.interface';
import {ModifyContactInterface} from '../add-contact/single-add-contact/models/modify-contact.interface';
import {RemoveContactInterface} from './models/remove-contact.interface';
import {GetAllContactGroupInterface} from '../add-contact/import-contact-from-other-lists/models/get-all--contact-group.interface';
import {AddContactFormGroupResponseInterface} from '../add-contact/add-contact-from-file/models/add-contact-form-group-response.interface';
import {ContactGroupMoveCopyResponseInterface} from '../add-contact/import-contact-from-other-lists/models/contact-group-move-copy-response.interface';
import {ContactGroupMoveCopyInterface} from '../add-contact/import-contact-from-other-lists/models/contact-group-move-copy-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService: ApiService, private http: HttpClient, private configService: ConfigService) {
  }

  getAllContacts(groupId: number, pageNumber: number, pageSize: number): Observable<GetAllContactGroupInterface> {
    const url = `Contact/ContactGroup/${groupId}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(url, true);
  }

  getContact(contactId: string): Observable<GetContactInterface> {
    const url = `Contact/${contactId}`;
    return this.apiService.get(url, true);
  }

  addContact(payload): Observable<AddContactResponseInterface> {
    const url = `Contact`;
    return this.apiService.post<AddContactInterface>(url, payload, true);
  }

  addContactFromFile(groupId: number, replaceDuplicateContact: boolean, immediate: boolean, file: File, relativePath: string): Observable<AddContactFormGroupResponseInterface> {
    const formData = new FormData();

    formData.append('logo', file, relativePath);
    formData.append('replaceDuplicateContact', replaceDuplicateContact.toString());
    formData.append('immediate', Immediate.toString());

    const headers = new HttpHeaders({
      token: localStorage.getItem('jwt-sms')
    });

    const url = `${this.configService.baseUrl}Contact/${groupId}`;
    return this.http.post<any>(url, formData, {headers});
  }

  addContactFromGroups(destinationGroupId: number, operationInfo: Map<number, number[]>, isCut: boolean): Observable<ContactGroupMoveCopyResponseInterface> {
    const rows = {};
    operationInfo.forEach((value, key) => {
      rows[key] = value;
    });
    const payload = {Dic: rows};
    const url = `ContactGroup/${isCut ? 'Move' : 'Copy'}/${destinationGroupId}`;
    return this.apiService.post<ContactGroupMoveCopyInterface>(url, payload, true);
  }

  modifyContact(contactId: number, payload): Observable<any> {
    const url = `Contact/${contactId}`;
    return this.apiService.put<ModifyContactInterface>(url, payload, true);
  }

  removeContact(contactId: number): Observable<RemoveContactInterface> {
    const url = `Contact/${contactId}`;
    return this.apiService.delete(url, null, true);
  }

  removeContactFromGroup(groupId: string, contactId: string): Observable<RemoveContactFormGroupInterface> {
    const url = `Contact/${contactId}/group/${groupId}`;
    return this.apiService.delete(url, null, true);
  }
}
