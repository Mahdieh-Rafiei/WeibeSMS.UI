import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BillingComponent} from './billing.component';
import {BillingAddressComponent} from './billing-address/billing-address.component';
import {BillingAddressResolverService} from './billing-address/billing-address-resolver.service';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';
import {PaymentComponent} from './payment/payment.component';
import {TransactionLogComponent} from './transaction-log/transaction-log.component';
import {NumbersComponent} from '../numbers/numbers.component';
import {UserLinesComponent} from '../numbers/user-lines/user-lines.component';
import {LinesComponent} from '../numbers/lines/lines.component';

const routes: Routes = [{
  path: '',
  component: BillingComponent,
  children: [
    {
      path: 'billing-address',
      component: BillingAddressComponent,
      data: {
        title: 'address',
        num: 1
      },
      resolve: {
        billingAddress: BillingAddressResolverService,
      },
    },
    {
      path: 'invoice-list',
      component: InvoiceListComponent,
      data: {
        title: 'invoice',
        num: 1
      },
    },
    {
      path: 'payment',
      component: PaymentComponent,
      data: {
        title: 'payment',
        num: 1
      },
    },
    {
      path: 'transaction-log',
      component: TransactionLogComponent,
      data: {
        title: 'transactions',
        num: 1
      },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {
}

export const routedComponents = [
  BillingComponent,
  InvoiceListComponent,
  PaymentComponent,
  BillingAddressComponent,
  TransactionLogComponent
];
