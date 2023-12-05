import { classNames } from '@shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Converter } from '@widgets/converter/Converter';

const MainPage = () => {
	return (
		<div className={classNames(cls.MainPage, {}, [])}>
			<Converter />
		</div>
	);
};

export default MainPage;