import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';
import { WalletService } from '../../services/wallet.service';
import { LinesComplete } from '../../interfaces/lines';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lines-component',
  templateUrl: './lines-component.component.html',
  styles: [
  ]
})
export class LinesComponentComponent implements OnInit {

  @Input() portfolio!: Portfolio
  lines: LinesComplete[] = []
  modalReference: any
  closeResult: string = ''
  error: string = ''

  page: number = 1
  pageSize: number = 10

  constructor(private service: WalletService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {

    this.service.getAllTransactions(this.portfolio.id!).subscribe( resp=> {
      this.lines = resp
    })

  }

  deleteLine(line: LinesComplete) {
    this.service.deleteTransaction(line.id).subscribe( resp => {
      this.error = ''
      window.location.reload()
      this.router.navigate(['coins/list'])
    }, err => {
      this.error = `Your coin can't be deleted. Please, try again`
    }) 
    return this.error
  }

  open(content: any) {
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.modalReference.close();
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

}
