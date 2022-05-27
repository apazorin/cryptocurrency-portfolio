import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eur, Portfolio } from '../interfaces/portfolio';
import { LinesComplete, Lines } from '../interfaces/lines';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private URL = 'http://localhost:3000/portfolios'
  private CONVERSIONURL = 'https://min-api.cryptocompare.com/data/price?fsym='

  constructor(private http: HttpClient) { }

  public getAllPortfolios(): Observable<Portfolio[]> { 
    return this.http.get<Portfolio[]>(`${this.URL}?_embed=lines`)
  }

  public getSugerencias(termino: string): Observable<Portfolio> { 
    return this.http.get<Portfolio>(`${this.URL}?q=${termino}`)
  }

  public getPortfolio(id: number): Observable<Portfolio> { 
    return this.http.get<Portfolio>(`${this.URL}/${id}`)
  }

  public deletePortfolio(id: number): Observable<Portfolio> { 
    return this.http.delete<Portfolio>(`${this.URL}/${id}`)
  }
  
  public editPortfolio(portfolio: Portfolio): Observable<Portfolio> { 
    return this.http.put<Portfolio>(`${this.URL}/${portfolio.id}`, portfolio)
  }

  public addPortfolio(portfolio: Portfolio): Observable<Portfolio> { 
    return this.http.post<Portfolio>(`${this.URL}`, portfolio)
  }

  public getAllTransactions(portfolioId: number): Observable<LinesComplete[]> {
    return this.http.get<LinesComplete[]>(`${this.URL}/${portfolioId}/lines?_expand=coin&_expand=portfolio`)
  }

  public addTransaciton(line: any, portfolioId: number) {
    return this.http.post(`${this.URL}/${portfolioId}/lines`, line)
  }

  public deleteTransaction(lineId: number) {
    return this.http.delete(`http://localhost:3000/lines/${lineId}`)
  }

  public getAmountEur(coin: string): Observable<Eur> {
    return this.http.get<Eur>(`${this.CONVERSIONURL}${coin}&tsyms=EUR`)
    
  }


}
