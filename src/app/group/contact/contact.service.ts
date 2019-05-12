import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../shared/config.service';
import {Immediate} from 'rxjs/internal-compatibility';
import {AddContactInterface} from '../add-contact/single-add-contact/models/add-contact.interface';
import {AddContactResponseInterface} from '../add-contact/single-add-contact/models/add-contact-response.interface';
import {GetContactInterface} from './models/get-contact.interface';
import {RemoveContactFormGroupInterface} from './models/remove-contact-form-group.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService: ApiService, private http: HttpClient, private configService: ConfigService) {
  }

  getAllContacts(groupId: number, pageNumber: number, pageSize: number): Observable<any> {
    return this.apiService.get(`Contact/ContactGroup/${groupId}?pageNumber=${pageNumber}&pageSize=${pageSize}`, true);
  }

  getContact(contactId: string): Observable<GetContactInterface> {
    const url = `Contact/${contactId}`;
    return this.apiService.get(url, true);
  }

  addContact(payload): Observable<AddContactResponseInterface> {
    const url = `Contact`;
    return this.apiService.post<AddContactInterface>(url, payload, true);
  }

  addContactFromFile(groupId: number, replaceDuplicateContact: boolean, immediate: boolean, file: File, relativePath: string): Observable<any> {

    const formData = new FormData();
    formData.append('logo', file, relativePath);
    formData.append('replaceDuplicateContact', replaceDuplicateContact.toString());
    formData.append('immediate', Immediate.toString());

    const headers = new HttpHeaders({
      'token': localStorage.getItem('jwt-sms')
    });

    return this.http.post(`${this.configService.baseUrl}Contact/${groupId}`, formData, {headers: headers});
  }

  addContactFromGroups(destinationGroupId: number, operationInfo: Map<number, number[]>, isCut: boolean): Observable<any> {
    let rows = {};

    operationInfo.forEach((value, key) => {
      rows[key] = value;
    });

    let payload = {Dic: rows};

    return this.apiService.post(`ContactGroup/${isCut ? 'Move' : 'Copy'}/${destinationGroupId}`, payload, true);
  }

  modifyContact(groupId: number, contactId: number, firstName: string, lastName: string, email: string, gender: number): Observable<any> {
    let payload = {
      'Gender': gender,
      'FirstName': firstName,
      'LastName': lastName,
      'ContactGroupId': groupId,
      'Email': email
    };

    return this.apiService.put(`Contact/${contactId}`, payload, true);
  }

  removeContact(contactId: number): Observable<any> {
    return this.apiService.delete(`Contact/${contactId}`, null, true);
  }

  removeContactFromGroup(groupId: string, contactId: string): Observable<RemoveContactFormGroupInterface> {
    const url = `Contact/${contactId}/group/${groupId}`;
    return this.apiService.delete(url, null, true);
  }
}
