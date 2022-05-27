import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { WalletRoutingModule } from './wallet-routing.module';
import { ListComponent } from './pages/list/list.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinesComponentComponent } from './components/lines-component/lines-component.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ListComponent,
    WalletComponent,
    TableComponent,
    LinesComponentComponent,
    BuyComponent,
    ModalComponent
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
