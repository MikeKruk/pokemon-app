import { typeColors } from '../../types/colors';

interface TypeFilterProps {
	types: string[];
	selected: string[];
	onToggle: (type: string) => void;
}

export default function TypeFilter({
	types,
	selected,
	onToggle,
}: TypeFilterProps) {
	return (
		<div>
			{types.map(type => {
				const isActive = selected.includes(type);
				const color = typeColors[type] ?? '#A8A77A';
				return (
					<button
						key={type}
						onClick={() => onToggle(type)}
						aria-pressed={isActive}
						className='px-3 py-1 rounded-full text-sx transition-all duration-150 cursor-pointer'
						style={{
							background: isActive ? color : `${color}33`,
							color: isActive ? 'white' : color,
							border: isActive ? `2px solid ${color}` : 'none',
						}}
					>
						{type}
					</button>
				);
			})}
		</div>
	);
}
