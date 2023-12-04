import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './header.module.scss';

import { flags } from '@assets/icons/flags';
import { Currency as TCurrency, CurrencyRate } from '@/services';
import { Text } from '@shared/ui/text/Text';
import { Currency, CurrencyTheme } from '@/shared/ui/currency/Currency';

const testData: CurrencyRate = {
	"meta": {
		"last_updated_at": "2023-12-03T23:59:59Z"
	},
	"data": {
		"EUR": {
			"code": "EUR",
			"value": 0.0250327636
		},
		"GBP": {
			"code": "GBP",
			"value": 2.4678523447
		},
		"USD": {
			"code": "USD",
			"value": 0.0272640496
		}
	}
}

const Logo = () => {
	return (
		<div className={cls.logo}>
			<img src={flags.UAH} alt="" />
			<p>Currency Rate Revue</p>
		</div>
	)
}

const Rates = () => {
	return (
		<div className={cls.rates}>
			{Object.values(testData.data).map(data => (
				<Currency key={data.code} data={data} theme={CurrencyTheme.ROUNDED} />
			))}
		</div>
	)
}


export const Header = () => {
	return (
		<header className={classNames(cls.Header, {}, [])}>
			<Logo />
			<Rates />
		</header>
	);
};