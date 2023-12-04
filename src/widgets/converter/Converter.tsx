import { useState } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Converter.module.scss';
import { control_icons } from '@shared/assets/icons/controls';
import { Input } from '@shared/ui/input/Input';
import { Text } from '@shared/ui/text/Text';
import { Select } from '@shared/ui/select/Select';
import { Currency, CurrencyRate } from '@/services';
import { flags } from '@/shared/assets/icons/flags';
import { Button, ThemeButton } from '@/shared/ui/button/Button';

const testData: CurrencyRate = {
	"meta": {
		"last_updated_at": "2023-12-03T23:59:59Z"
	},
	"data": {
		"UAH": {
			"code": "UAH",
			"value": 0.0250327636
		},
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

interface CurrencyItemProps {
    value: string
}

const CurrencyItem = ({ value }: CurrencyItemProps) => {
	return (
		<div className={cls.currency_item}>
			<img src={flags[value]} alt="" />
			{value} - British Pound Sterling
		</div>
	)
}

interface ConverterProps {
    className?: string;
}

export const Converter = ({ className = '' }: ConverterProps) => {
	const [amount, setAmount] = useState<string>('0');
	console.log(Object.values(testData.data).map(({code}) => ({ value: code })));
    

	return (
		<div className={classNames(cls.Converter, {}, [className])}>
			<div className={cls.controls}>
				<Select 
					options={Object.values(testData.data).map(({code}) => ({ value: code }))} 
					selected={{ value: 'EUR' }}
					RenderWith={CurrencyItem}
				/>
				<Button theme={ThemeButton.SO_CLEAR}>
					<img src={control_icons.exchange} height={'25'} alt="" />
				</Button>
				<Select 
					options={Object.values(testData.data).map(({code}) => ({ value: code }))} 
					selected={{ value: 'EUR' }}
					RenderWith={CurrencyItem}
				/>
			</div>
			<div className={cls.review}>
				<Input 
					type="text" 
					header='Amount' 
					value={amount} 
					onChange={setAmount} 
					placeholder='input your amount'
				/>
				<div className={cls.result}>
					<Text 
						title="12 USD"
						text='654.12 ETB'
						className={classNames('', {}, [cls.to_end, cls.values])} 
					/>
					<Text 
						text='Market rates'
						className={classNames('', {}, [cls.to_end, cls.date])} 
					/>
				</div>
			</div> 
		</div>
	);
};