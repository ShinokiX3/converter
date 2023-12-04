import { classNames } from '@shared/lib/classNames/classNames';
import { Currency as TCurrency } from '@/services';
import cls from './Currency.module.scss';
import { Text } from '../text/Text';
import { flags } from '@shared/assets/icons/flags';

export enum CurrencyTheme {
    'DEFAULT' = 'default',
    'ROUNDED' = 'rounded',
}

interface CurrencyProps {
    data: TCurrency;
    theme?: CurrencyTheme;
}

export const Currency = ({ data, theme = CurrencyTheme.DEFAULT }: CurrencyProps) => {
	const { code, value } = data;

	return (
		<div className={classNames(cls.Currency, {}, [cls[theme]])}>
			<img 
				src={flags[code]} 
				height={'40px'} 
				alt='' 
			/>
			<Text title={code} text={'British Pound Sterling'} />
			<p className={cls.value}>${value.toFixed(3)}</p>  
		</div>
	);
};