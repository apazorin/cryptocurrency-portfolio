import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../interfaces/portfolio';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private URL = 'http://localhost:3000/portfolios'

  constructor(private http: HttpClient) { }

  public getAllPortfolios(): Observable<Portfolio[]> { 
    return this.http.get<Portfolio[]>(`${this.URL}`)
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


}
