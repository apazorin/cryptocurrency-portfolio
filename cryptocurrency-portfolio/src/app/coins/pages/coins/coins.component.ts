import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoinsService } from '../../services/coin.service';
import { Observable, switchMap } from 'rxjs';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsValidatorService } from '../../../shared/validators/coins-validator.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styles: [
  ]
})
export class CoinsComponent implements OnInit{

  error = ''

  form: FormGroup = this.fb.group({
    acronym: ['', [Validators.required], [this.cv]],
    name: ['', [Validators.required]]
  })

  coin: Coin = {
    id: -1,
    acronym: '',
    name: ''
  }

  get nameErrorMensage(): string {
    const errors = this.form.get('acronym')?.errors
    if(errors?.['required']) return 'The acronym is required'
    else if(errors?.['nameNoExists']) return 'The coin you puted no exists. Please try again with another acronym'
    else return ''
  }

  public coins$!: Observable<Coin[]>

  constructor( private service: CoinsService, private fb: FormBuilder, private cv: CoinsValidatorService,
              private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => 
        this.service.getCoin(id)
      ))
      .subscribe(coin => {
        this.coin = coin
        this.form = this.fb.group({
          acronym: [coin.acronym, [Validators.required], [this.cv]],
          name: [coin.name, [Validators.required]]
        })
      }, err => {
        this.error = `The coin can't be loaded right now. Please refresh and try again`
      })
    }
  }

  deleteCoin() {
    this.form.markAllAsTouched()
    this.service.deleteCoin(this.coin.id!).subscribe(resp => {
        this.form.reset()
        this.error = ''
        this.router.navigate(['coins/list'])
      }, err => {
        this.error = `Your coin can't be deleted. Please, try again`
      }) 
  }

  addCoin() {
    this.form.markAllAsTouched()
    if(this.form.valid == true) {
      const coin: Coin = {
        name: this.form.get('name')?.value,
        acronym: this.form.get('acronym')?.value
      }
      this.service.addCoin(coin).subscribe(resp => {
        this.form.reset()
        this.error = ''
      }, err => {
        this.error = `Your coin can't be added. Please, try again`
      }) 
    }
  }

  editCoin() {
    this.form.markAllAsTouched()
    if(this.form.valid == true) {
      const coin: Coin = {
        id: this.coin.id,
        name: this.form.get('name')?.value,
        acronym: this.form.get('acronym')?.value
      }
      this.service.editCoin(coin).subscribe(resp => {
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
