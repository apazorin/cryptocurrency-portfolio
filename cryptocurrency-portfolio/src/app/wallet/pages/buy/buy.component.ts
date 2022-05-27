import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Coin } from '../../../coins/interfaces/coin.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { CoinsService } from '../../../coins/services/coin.service';
import { switchMap } from 'rxjs';
import { Portfolio } from '../../interfaces/portfolio';
import { Lines } from '../../interfaces/lines';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styles: [
  ]
})
export class BuyComponent implements OnInit {

  coin: Coin | undefined
  coins: Coin[] = []
  portfolios: Portfolio[] = []
  error: string = ''
  form: FormGroup = this.fb.group({
    portfolioId: ['', Validators.required],
    coinId: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0.000000000000000001)]],
  }) 

  constructor(private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute,
              private serviceWallet: WalletService, private serviceCoins: CoinsService) { }

  ngOnInit(): void {
    this.serviceCoins.getAllCoins().subscribe(resp => {
      this.coins = resp; 
      console.log(this.coins)
      console.log(resp)
    })
    this.serviceWallet.getAllPortfolios().subscribe(resp => this.portfolios = resp)

    this.activateRoute.params.pipe( switchMap( ({id}) => this.serviceCoins.getCoin(id)) ).subscribe( resp => {
      this.coin = resp
      //if(this.coin != undefined) this.coins.unshift(this.coin!)
    })
  }

  addLine() {
    console.log('buying...')
    this.form.markAllAsTouched()
    if(this.form.valid == true) {
      console.log('buying...')
      const transaction = {
        portfolioId: this.form.get('portfolioId')?.value,
        coinId: this.form.get('coinId')?.value,
        amount: this.form.get('amount')?.value,
      }
      console.log(transaction)
      this.serviceWallet.addTransaciton(transaction, transaction.portfolioId).subscribe(resp => {
        this.form.reset()
        this.error = 'Your transactions has been added correctly'
      }, err => {
        this.error = `Your transaction can't be added. Please, try again`
      }) 
    }
  }

  campoValido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
  }

}
