import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

interface response { Response: string }

@Injectable({
  providedIn: 'root'
})
export class CoinsValidatorService implements AsyncValidator {

  private URL = 'https://min-api.cryptocompare.com/data/all/coinlist?fsym='

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const coin = control.value
    console.log('Validacion', coin)
    return this.http.get<response>(`${this.URL}${coin}`).pipe( 
      delay(1000),
      map( resp => {
        console.log(control)
        console.log(resp.Response)
        return (resp.Response == 'Success' ) ? null : { nameNoExists: true }
      }))
  }
}
