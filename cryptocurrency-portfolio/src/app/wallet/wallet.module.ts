import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { ListComponent } from './pages/list/list.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ListComponent,
    WalletComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
