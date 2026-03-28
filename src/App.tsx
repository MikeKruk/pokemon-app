import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ROUTES } from './constants/constants';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />
					<Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
