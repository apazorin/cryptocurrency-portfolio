import { Component, OnInit } from '@angular/core';
import { Portfolio, Eur } from '../../interfaces/portfolio';
import { WalletService } from '../../services/wallet.service';
import { map, switchMap, tap } from 'rxjs';
import { CoinsService } from '../../../coins/services/coin.service';
import { Coin } from '../../../coins/interfaces/coin.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  portfolios: Portfolio[] = []

  constructor(private service: WalletService, private coinService: CoinsService) { }

  ngOnInit(): void {
    let amount = 0
    let eur: Eur

    this.service.getAllPortfolios().subscribe( resp => {
      this.portfolios = resp
      this.portfolios.forEach(p=> {
        this.service.getAllTransactions(p.id!).subscribe( resp => { p.lines = resp })
        p.totalAmount = this.getTotalAmount(p)
      })
    })
  }

  /*getTotalAmount!(p: Portfolio) {
    let amount = 0
    let eur: Eur

    p.lines?.forEach(l => { 
      this.coinService.getCoin(l.id)
      .pipe(
        switchMap( c => this.service.getAmountEur(c.acronym))
      ) 
      .subscribe( a => {
        eur = a
        if('EUR' in a) {
          amount = amount + eur.EUR
          console.log(amount)
        }
      }) 
    })
    return amount
  }*/
  getTotalAmount(p: Portfolio) {
    let amount = 0
    p.lines?.forEach(p => { amount += p.amount})
    return amount
  }
}


