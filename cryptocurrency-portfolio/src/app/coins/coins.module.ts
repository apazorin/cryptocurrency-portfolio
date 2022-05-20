import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CardsComponent } from './componentes/cards/cards.component';
import { ListComponent } from './pages/list/list.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardsComponent,
    ListComponent,
    CoinsComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoinsModule { }
