import { Lines } from './lines';

export interface Portfolio {
    id?: number,
    name: string,
    lines?: Lines[],
    totalAmount?: number
}

export interface Eur {
    EUR: number
}