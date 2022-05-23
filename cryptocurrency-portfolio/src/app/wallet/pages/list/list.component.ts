import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  portfolios: Portfolio[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
