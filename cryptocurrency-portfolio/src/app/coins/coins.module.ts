import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule
  ]
})
export class CoinsModule { }
