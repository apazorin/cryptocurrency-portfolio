import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { WalletRoutingModule } from './wallet-routing.module';
import { ListComponent } from './pages/list/list.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    WalletComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ]
})
export class WalletModule { }
