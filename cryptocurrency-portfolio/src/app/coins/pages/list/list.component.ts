import { Component, OnInit } from '@angular/core';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsService } from '../../services/coin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  coins: Coin[] = []

  constructor(private service: CoinsService) { }

  ngOnInit(): void { 

    this.service.getAllCoins().subscribe( resp => {
      this.coins = resp
    })


  }

}
