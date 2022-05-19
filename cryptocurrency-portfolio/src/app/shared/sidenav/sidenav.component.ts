import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  menu: MenuItem[] = [
    {
      texto: 'Crypto coins',
      ruta: './coins/list'
    },
    {
      texto: 'Wallet',
      ruta: './wallet/list'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
