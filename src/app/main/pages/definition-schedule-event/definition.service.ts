import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {DefinitionInterface} from './models/definition.interface';

@Injectable({
  providedIn: 'root'
})

export class DefinitionService {

  constructor(private apiService: ApiService) {
  }


  getAllDefinitionScheduleEvent(): Observable<DefinitionInterface> {
    const url = `Definition`;
    return this.apiService.get(url, true);
  }

}
