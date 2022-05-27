import { Component, Input, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Portfolio } from '../../interfaces/portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  @Input() portfolio!: Portfolio
  error: string = ''

  constructor(private service: WalletService, private router: Router) { }

  ngOnInit(): void {
  }

  deletePortfolio() {
    this.service.deletePortfolio(this.portfolio.id!).subscribe(resp => {
      this.error = ''
        window.location.reload()
        this.router.navigate(['wallet/list'])
      }, err => {
        this.error = `Your coin can't be deleted. Please, try again`
      }) 
      return this.error
  }

}
