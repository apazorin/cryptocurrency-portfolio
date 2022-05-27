import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsService } from '../../services/coin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() coin!: Coin
  closeResult = '';
  error = ''
  modalReference: any

  constructor(private service: CoinsService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {}

  open(content: any) {
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.modalReference.close();
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  deleteCoin() {
    this.service.deleteCoin(this.coin.id!).subscribe(resp => {
      this.error = ''
      window.location.reload()
      this.router.navigate(['coins/list'])
    }, err => {
      this.error = `Your coin can't be deleted. Please, try again`
    }) 
    return this.error
  }

}
