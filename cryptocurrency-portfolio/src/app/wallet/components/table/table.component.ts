import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input() portfolios!: Portfolio[]
  page: number = 1
  pageSize: number = 10

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.portfolios.forEach(p => console.log(p))
  }

  navegacion(id: number | undefined) {
    this.router.navigate(['/wallet/wallet/editar', id])
  }

}
