import { Coin } from 'src/app/coins/interfaces/coin.interface';
import { Portfolio } from './portfolio';
export interface Lines {
    id: number,
    portfolioId: number,
    coinId: number,
    amount: number
}

export interface LinesComplete {
    id: number,
    portfolioId: number,
    coinId: number,
    amount: number,
    coin: Coin,
    portfolio: Portfolio
}