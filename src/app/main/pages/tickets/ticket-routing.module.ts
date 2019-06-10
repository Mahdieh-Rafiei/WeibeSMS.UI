import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TicketComponent} from './ticket.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {SingleTicketComponent} from './ticket/single-ticket.component';
import {AddTicketComponent} from './add-ticket/add-ticket.component';
import {StatusTranslatorPipe} from '../../../shared/pipe/status-translator.pipe';

const routes: Routes = [{
  path: '',
  component: TicketComponent,
  children: [{
    path: 'list',
    component: TicketListComponent,
    data: {
      title: 'ticket list',
      num: 1
    },
  }, {
    path: 'modify/:id',
    component: SingleTicketComponent,
    data: {
      title: 'single ticket',
      num: 1
    },
  }, {
    path: 'add',
    component: AddTicketComponent,
    data: {
      title: 'add ticket',
      num: 1
    },
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {
}

export const routedComponents = [
  TicketComponent,
  TicketListComponent,
  SingleTicketComponent,
  AddTicketComponent,
  StatusTranslatorPipe
];
