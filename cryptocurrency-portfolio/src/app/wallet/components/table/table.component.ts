import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input() portfolio!: Portfolio

  constructor() { }

  ngOnInit(): void {
  }

}
