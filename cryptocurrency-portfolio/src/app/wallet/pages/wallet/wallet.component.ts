import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio';
import { WalletService } from '../../services/wallet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styles: [
  ]
})
export class WalletComponent implements OnInit {

  error: string = ''

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  })

  portfolio: Portfolio = {
    id: -1,
    name: ''
  }

  constructor(private service: WalletService, private router: Router, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => 
        this.service.getPortfolio(id)
      ))
      .subscribe(portfolio => {
        this.portfolio = portfolio
        this.form = this.fb.group({
          name: [portfolio.name, [Validators.required]]
        })
      }, err => {
        this.error = `The wallet can't be loaded right now. Please refresh and try again`
      })
    }
  }

  addPortfolio() {
    this.form.markAllAsTouched()
    if(this.form.valid == true) {
      const portfolio: Portfolio = {
        name: this.form.get('name')?.value
      }
      this.service.addPortfolio(portfolio).subscribe(resp => {
        this.form.reset()
        this.error = ''
      }, err => {
        this.error = `Your coin can't be added. Please, try again`
      }) 
    }
  }

  editPortfolio() {
    this.form.markAllAsTouched()
    if(this.form.valid == true) {
      const portfolio: Portfolio = {
        id: this.portfolio.id,
        name: this.form.get('name')?.value,
        lines: this.portfolio.lines
      }
      this.service.editPortfolio(portfolio).subscribe(resp => {
        this.error = 'Your coin was succesfully edited'
      }, err => {
        this.error = `Your coin can't be edited. Please, try again`
      }) 
    }
  }

  campoValido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
  }

}
