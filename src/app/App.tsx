import MainPage from '@pages/main/MainPage'
import { Header } from '@widgets/header/Header'

export const App = () => {

	return (
		<div>
			<Header />
			<div>
				<MainPage />
			</div>
		</div>
	)
}