import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../interfaces/coin.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() coin!: Coin

  constructor() { }

  ngOnInit(): void {
  }

}
