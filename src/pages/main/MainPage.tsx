import { classNames } from '@/shared/lib/classNames/classNames';
import React, { useEffect } from 'react';
import cls from './MainPage.module.scss';

const testData = {
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

const MainPage = () => {

	useEffect(() => {
		(async () => {
			// testData
		})()
	}, []);

	return (
		<div className={classNames(cls.MainPage, {}, [])}>
			<div className={cls.converter_wrapper}>
				Some
			</div>
		</div>
	);
};

export default MainPage;