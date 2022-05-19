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

  public getAllCoins(): Observable<Coin> { 
    return this.http.get<Coin>(`${URL}`)
  }

  public getSugerencias(termino: string): Observable<Coin> { 
    return this.http.get<Coin>(`${URL}?q=${termino}`)
  }

  public getCoin(coinId: number): Observable<Coin> { 
    return this.http.get<Coin>(`${URL}/${coinId}`)
  }

  public deleteCoin(coinId: number): Observable<Coin> { 
    return this.http.delete<Coin>(`${URL}/${coinId}`)
  }
  
  public modifyCoin(coinId: number, coin: Coin): Observable<Coin> { 
    return this.http.post<Coin>(`${URL}/${coinId}`, coin)
  }

  public addCoin(coinId: number, coin: Coin): Observable<Coin> { 
    return this.http.put<Coin>(`${URL}/${coinId}`, coin)
  }

}
