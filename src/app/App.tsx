import { useState, useEffect } from 'react';
import MainPage from '@pages/main/MainPage'
import { Header } from '@widgets/header/Header'
import cls from './App.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CurrencyRate, currencyApi } from '@/services';

export const App = () => {
	const [currencyRate, setCurrencyRate] = useState<CurrencyRate | null>(null);

	useEffect(() => {
		(async () => {
			const response = await currencyApi.fetchCurrencyRate();
			if (response?.data) setCurrencyRate(response.data);
		})()
	}, []);

	return (
		<div className={classNames(cls.App, {}, [])}>
			<Header currencyRate={currencyRate} />
			<div className={cls.content_wrapper}>
				{/* TODO: If we need more than one page, here the place, where we could put AppRouter */}
				<MainPage />
			</div>
		</div>
	)
}