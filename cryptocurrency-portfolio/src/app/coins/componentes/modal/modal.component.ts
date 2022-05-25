import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsService } from '../../services/coin.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  @Input() coin!: Coin
  error: string = ''

  constructor(private service: CoinsService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteCoin() {
    this.service.deleteCoin(this.coin.id!).subscribe(resp => {
      this.error = ''
        this.router.navigate(['coins/list'])
      }, err => {
        this.error = `Your coin can't be deleted. Please, try again`
      }) 
      return this.error
  }
}
