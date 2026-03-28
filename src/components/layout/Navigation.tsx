import { ROUTES } from '@/constants/constants';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav className='flex gap-3 items-center'>
			<NavLink
				to={ROUTES.HOME}
				className={({ isActive }) =>
					`
            text-sm font-medium transition-colors pb-0.5
            ${
							isActive
								? 'text-yellow-400 border-b-2 border-yellow-400'
								: 'text-white hover:text-white/50'
						}
            `
				}
			>
				Home
			</NavLink>

			<NavLink
				to={ROUTES.FAVORITES}
				className={({ isActive }) =>
					`
            text-sm font-medium transition-colors pb-0.5
            ${
							isActive
								? 'text-yellow-400 border-b-2 border-yellow-400'
								: 'text-white hover:text-white/50'
						}
            `
				}
			>
				Favorites
			</NavLink>
		</nav>
	);
}
