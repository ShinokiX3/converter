import { useState, useEffect, useMemo, useRef } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Converter.module.scss';
import { control_icons } from '@shared/assets/icons/controls';
import { Input } from '@shared/ui/input/Input';
import { Text } from '@shared/ui/text/Text';
import { Select, SelectOption } from '@shared/ui/select/Select';
import { CurrencyRate, currencyApi } from '@/services';
import { flags } from '@shared/assets/icons/flags';
import { Button, ThemeButton } from '@shared/ui/button/Button';
import { dateFormat } from '@shared/lib/dateFormat/dateFormat';
import { CURRENCY_FULL_NAMES, CURRENCY_OPTIONS } from '@services/currency/const';


interface CurrencyItemProps {
    value: string
}

const CurrencyItem = ({ value }: CurrencyItemProps) => {
	return (
		<div className={cls.currency_item}>
			<img src={flags[value]} alt="" />
			{value} - {CURRENCY_FULL_NAMES[value].title}
		</div>
	)
}

interface ConverterProps {
    className?: string;
}

export const Converter = ({ className = '' }: ConverterProps) => {
	const [baseCurrency, setBaseCurrency] = useState<string>('');
	const [exchangeCurrency, setExchangeCurrency] = useState<string>('');

	const [totalTitle, setTotalTitle] = useState<string>('');
	const [total, setTotal] = useState<string>('');

	const [currencyRate, setCurrencyRate] = useState<CurrencyRate>();
	
	const [selectedBase, setSelectedBase] = useState<SelectOption>();
	const [selectedCurrency, setSelectedCurrency] = useState<SelectOption>();

	const baseCurrencyRef = useRef<HTMLInputElement | null>(null);
	const exchangeCurrencyRef = useRef<HTMLInputElement | null>(null);

	const ratesCollected = useMemo(() => {
		if (currencyRate !== undefined) return dateFormat(new Date(currencyRate.meta.last_updated_at))
	}, [currencyRate])

	const value: number = useMemo(() => { 
		if (currencyRate !== undefined) 
			return currencyRate.data[Object.keys(currencyRate?.data)[0]].value; 
		else return 1;
	}, [currencyRate])
	

	useEffect(() => {
		(async () => {
			if (selectedBase && selectedCurrency) {
				const base = selectedBase.value;
				const currency = selectedCurrency.value;

				const response = await currencyApi.fetchCurrencyRate([currency], base);
				if (response !== null && response !== undefined && response.data) 
					setCurrencyRate(response.data);
			}
		})()
	}, [selectedBase, selectedCurrency]);

	useEffect(() => {
		if (currencyRate !== undefined) {
			const total = (Number(baseCurrency) * value).toFixed(2);
			
			if (exchangeCurrencyRef.current) exchangeCurrencyRef.current.value = total;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [baseCurrency, selectedBase]);

	useEffect(() => {
		if (currencyRate !== undefined) {
			const total = (Number(exchangeCurrency) / value).toFixed(2);

			if (baseCurrencyRef.current) baseCurrencyRef.current.value = total;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [exchangeCurrency]);

	const handleReverse = () => {
		if (selectedBase && selectedCurrency) {
			const temp = selectedBase;
			setSelectedBase(selectedCurrency);
			setSelectedCurrency(temp);
		}
	}

	const handleBase = (value_: string) => {
		setTotal(String(Number(value_) * value)); 
		setBaseCurrency(value_.replace(/[^0-9.]+$/, ''));
		setTotalTitle(value_);
	}

	const handleExchange = (value_: string) => {
		setTotal(value_);
		setExchangeCurrency(value_.replace(/[^0-9.]+$/, ''));
		setTotalTitle(String(Number(value_) / value))
	}

	return (
		<div className={classNames(cls.Converter, {}, [className])}>
			<div className={cls.controls}>
				<Select 
					options={Object.values(CURRENCY_OPTIONS.data).map(({code}) => ({ value: code }))} 
					selected={selectedBase}
					onSelect={setSelectedBase}
					RenderWith={CurrencyItem}
				/>
				<Button theme={ThemeButton.SO_CLEAR} onClick={handleReverse}>
					<img src={control_icons.exchange} height={'25'} alt="" />
				</Button>
				<Select 
					options={Object.values(CURRENCY_OPTIONS.data).map(({code}) => ({ value: code }))} 
					selected={selectedCurrency}
					onSelect={setSelectedCurrency}
					RenderWith={CurrencyItem}
				/>
			</div>
			<div className={cls.review}>
				<Input 
					ref={baseCurrencyRef}
					type="text" 
					header={`${selectedBase?.value || 'Base currency'}`} 
					value={baseCurrency} 
					onChange={handleBase} 
					placeholder='input your amount'
				/>
				<Input 
					ref={exchangeCurrencyRef}
					type="text" 
					header={`${selectedCurrency?.value || 'Exchange currency'}`} 
					value={exchangeCurrency} 
					onChange={handleExchange} 
					placeholder='input your amount'
				/>
				<div className={cls.result}>
					<Text 
						title={`${Number(totalTitle)?.toFixed(3)} ${selectedBase?.value || ''}`}
						text={`${Number(total)?.toFixed(3) || baseCurrency} ${selectedCurrency?.value || ''}`}
						className={classNames('', {}, [cls.to_end, cls.values])} 
					/>
					<Text 
						text={`Market rates collected - ${ratesCollected || '...'}`}
						className={classNames('', {}, [cls.to_end, cls.date])} 
					/>
				</div>
			</div> 
		</div>
	);
};