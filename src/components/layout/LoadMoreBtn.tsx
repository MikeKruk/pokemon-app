import { Button } from '../ui/button';

interface LoadMoreBtnProps {
	onClick: () => void;
	isLoading: boolean;
}
export default function LoadMoreBtn({ onClick, isLoading }: LoadMoreBtnProps) {
	return (
		<Button
			type='button'
			className='
        rounded-full px-8 py-2 bg-blue-500 text-white font-semibold
        shadow-lg shadow-blue-500/25
        transition-all duration-200
        hover:bg-blue-400 hover:scale-105
        disabled:opacity-50 disabled:scale-100
        '
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? 'Loading more...' : 'Load more'}
		</Button>
	);
}
