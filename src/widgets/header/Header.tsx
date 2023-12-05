import { useState } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './header.module.scss';
import { flags } from '@assets/icons/flags';
import { CurrencyRate } from '@/services';
import { Currency, CurrencyTheme } from '@shared/ui/currency/Currency';
import { Button, ThemeButton } from '@shared/ui/button/Button';
import { Portal } from '@shared/ui/portal/Portal';
import { CurrencyData } from '@services/currency/types';
import { Loader } from '@/shared/ui/loader/Loader';

interface LogoProps {
	title: string
}

const Logo: React.FC<LogoProps> = ({ title }) => {
	return (
		<div className={cls.logo}>
			<img src={flags.UAH} alt="" />
			<p>{title}</p>
		</div>
	)
}

interface RatesProps {
	data: CurrencyData;
}

const Rates: React.FC<RatesProps> = ({ data }) => {
	return (
		<div className={cls.rates}>
			{Object.values(data).map(data => (
				<Currency key={data.code} data={data} theme={CurrencyTheme.ROUNDED} />
			))}
		</div>
	)
}

interface HeaderProps {
	currencyRate: CurrencyRate | null;
}

export const Header: React.FC<HeaderProps> = ({ currencyRate }) => {
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	return (
		<>
			<header className={classNames(cls.Header, {}, [])}>
				<Logo title='Currency Rate Review' />
				{currencyRate ? <Rates data={currencyRate.data} /> : <Loader />}
				<div className={cls.mobile}>
					<Button 
						className={cls.mobile_button} 
						theme={ThemeButton.OUTLINE}
						onClick={() => setMenuVisible(!menuVisible)}
					>
						Show rates for UAH
					</Button>
				</div>
			</header>
			{menuVisible ? 
				<Portal>
					<div className={cls.mobile_menu}>
						<Button 
							className={cls.mobile_button} 
							theme={ThemeButton.OUTLINE}
							onClick={() => setMenuVisible(!menuVisible)}
						>
							Close
						</Button>
						{currencyRate ? <Rates data={currencyRate.data} /> : <div>Loading</div>}
					</div>
				</Portal> 
				: null}
		</>
	);
};