export type Currencies = string[];

export interface Currency {
    code: string;
    value: number;
}

export interface CurrencyMeta { last_updated_at: string }
export interface CurrencyData { [key: string]: Currency }

export interface CurrencyRate {
    meta: CurrencyMeta;
    data: CurrencyData;
}

export interface CurrencyErrors { [key: string]: string[] }

export interface CurrencyRateError {
    errors: CurrencyErrors;
    info: string;
    message: string;
}