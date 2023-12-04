import MainPage from '@pages/main/MainPage'
import { Header } from '@widgets/header/Header'
import cls from './App.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export const App = () => {

	return (
		<div className={classNames(cls.App, {}, [])}>
			<Header />
			<div className={cls.content_wrapper}>
				{/* TODO: If we need more than one page, here the place, where we could put AppRouter */}
				<MainPage />
			</div>
		</div>
	)
}