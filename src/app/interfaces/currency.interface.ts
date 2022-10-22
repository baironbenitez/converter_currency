export interface Converter{
    amount: number;
    from: string;
    to: string;
}

export interface Currency{
    id: string;
    name: string;
}

export interface Convertion{
    amount: number;
    base: string;
    date: Date;
    rates: {
        [key: string]: number
    }
}