import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CardsComponent } from './componentes/cards/cards.component';
import { ListComponent } from './pages/list/list.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './componentes/modal/modal.component';


@NgModule({
  declarations: [
    CardsComponent,
    ListComponent,
    CoinsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoinsModule { }
