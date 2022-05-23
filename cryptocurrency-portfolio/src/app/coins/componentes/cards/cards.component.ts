import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsService } from '../../services/coin.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() coin!: Coin

  constructor(private service: CoinsService) { }

  ngOnInit(): void {}

  delete(coin: Coin, data:String) {
    console.log(this.coin)
    /*this.service.deleteCoin(this.coin.id!).subscribe(resp => {
      console.log(resp)
    })*/
  }

}
