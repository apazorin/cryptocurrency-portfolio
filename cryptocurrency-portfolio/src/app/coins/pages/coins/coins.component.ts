import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoinsService } from '../../services/coin.service';
import { Observable } from 'rxjs';
import { Coin } from '../../interfaces/coin.interface';
import { CoinsValidatorService } from '../../../shared/validators/coins-validator.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styles: [
  ]
})
export class CoinsComponent{

  error = ''

  form: FormGroup = this.fb.group({
    acronym: ['', [Validators.required], [this.cv]],
    name: ['', [Validators.required]]
  })

  //@ViewChild() title!: string

  get nameErrorMensage(): string {
    const errors = this.form.get('acronym')?.errors
    if(errors?.['required']) return 'The acronym is required'
    else if(errors?.['nameNoExists']) return 'The coin you puted no exists. Please try again with another acronym'
    else return ''
  }

  public coins$!: Observable<Coin[]>

  constructor(private service: CoinsService, private fb: FormBuilder, private cv: CoinsValidatorService) { }

  submitFormulario() {
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

  campoValido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
  }

}
