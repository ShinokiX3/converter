// TODO: In this case, to save free API requests, we could customize a list of countries.
// In additional, could be some proplems with loading flags for huge list of country currencies in this api. 

import { CurrencyRate } from "@services/currency/types";

export interface CountryCurrency {
    title: string;
    symbol: string;
}

export const CURRENCY_FULL_NAMES: { [key: string]: CountryCurrency } = {
	'UAH': {
		title: 'Ukrainian Hryvna',
		symbol: '₴',
	},
	'USD': {
		title: 'United States Dollar',
		symbol: '$',
	},
	'GBP': {
		title: 'British Pound Sterling',
		symbol: '£',
	},
	'EUR': {
		title: 'Euro',
		symbol: '€',
	}
}  

export const CURRENCY_OPTIONS: CurrencyRate = {
	"meta": {
		"last_updated_at": "2023-12-03T23:59:59Z"
	},
	"data": {
		"UAH": {
			"code": "UAH",
			"value": 0.0
		},
		"EUR": {
			"code": "EUR",
			"value": 0.0
		},
		"GBP": {
			"code": "GBP",
			"value": 0.0
		},
		"USD": {
			"code": "USD",
			"value": 0.0
		}
	}
}