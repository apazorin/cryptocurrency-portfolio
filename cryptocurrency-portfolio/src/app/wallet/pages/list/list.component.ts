import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  portfolios: Portfolio[] = []

  constructor(private service: WalletService) { }

  ngOnInit(): void {
    this.service.getAllPortfolios().subscribe( resp => {
      this.portfolios = resp
    })
  }

}
