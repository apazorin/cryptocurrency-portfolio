import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coin } from '../interfaces/coin.interface'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  private URL = 'http://localhost:3000/coins'

  constructor(private http: HttpClient) { }

  public getAllCoins(): Observable<Coin[]> { 
    return this.http.get<Coin[]>(`${this.URL}`)
  }

  public getSugerencias(termino: string): Observable<Coin> { 
    return this.http.get<Coin>(`${this.URL}?q=${termino}`)
  }

  public getCoin(coinId: number): Observable<Coin> { 
    return this.http.get<Coin>(`${this.URL}/${coinId}`)
  }

  public deleteCoin(coinId: number): Observable<Coin> { 
    return this.http.delete<Coin>(`${this.URL}/${coinId}`)
  }
  
  public modifyCoin(coinId: number, coin: Coin): Observable<Coin> { 
    return this.http.put<Coin>(`${this.URL}/${coinId}`, coin)
  }

  public addCoin(coin: Coin): Observable<Coin> { 
    console.log(coin)
    return this.http.post<Coin>(`${this.URL}`, coin)
  }

}
