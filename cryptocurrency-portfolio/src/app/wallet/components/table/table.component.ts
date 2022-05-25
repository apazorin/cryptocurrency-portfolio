import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';

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

  constructor() { }

  ngOnInit(): void {
  }
  
  delete(p: Portfolio) {
    console.log(p.id)
  }

}
