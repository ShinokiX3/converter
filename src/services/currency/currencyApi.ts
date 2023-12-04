import axios, { AxiosResponse } from "axios";
import { Currencies, CurrencyRate, CurrencyRateError } from "./types";

const BASE_URL = 'https://api.currencyapi.com/v3/latest';
const API_KEY = 'cur_live_UMLagBhnng36MKnD1wOUbEIZeZg90OGhIoN7glJs';

class CurrencyApi {
	private base_url: string;
	private api_key: string;
  
	constructor(base_url: string, api_key: string) {
		this.base_url = base_url;
		this.api_key = api_key;
	}
  
	async fetchCurrencyRate(
		currencies: Currencies = ['EUR', 'USD', 'RUB'], base_currency: string = 'UAH'
	): Promise<AxiosResponse<CurrencyRate> | CurrencyRateError | object> {
		try {
			const src = `${this.base_url}?apikey=${this.api_key}&currencies=${currencies.join(',')}&base_currency=${base_currency}`;
			const response = await axios.get(src);
			if (!response?.data) return response.data;
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}  

export default new CurrencyApi(BASE_URL, API_KEY);