import { Star } from 'lucide-react';
import { getCardBackground } from '../../lib/utils';
import type { Pokemon } from '../../types/pokemon';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';

interface PokemonProps {
	pokemon: Pokemon;
	onClick: (pokemon: Pokemon) => void;
	isFavorite: boolean;
	onToggleFavorite: (pokemon: Pokemon) => void;
}
export default function PokemonCard({
	pokemon,
	onClick,
	isFavorite,
	onToggleFavorite,
}: PokemonProps) {
	const types = pokemon.types.map(type => type.type.name);
	const background = getCardBackground(types);
	const num = String(pokemon.id).padStart(3, '0');
	const image = pokemon.sprites.other['official-artwork'].front_default;

	return (
		<Card
			aria-label={pokemon.name}
			onClick={() => onClick(pokemon)}
			className='
      mb-4 overflow-hidden border-0 cursor-pointer transition-transform duration-300 
      hover:scale-105 hover:brightness-110
      '
			style={{ background }}
		>
			<CardHeader>
				<Star
					onClick={e => {
						e.stopPropagation();
						onToggleFavorite(pokemon);
					}}
					className={`w-6 h-6 transition-colors ${
						isFavorite ? 'text-yellow-400 fill-yellow-400' : ''
					}`}
				/>
			</CardHeader>
			<CardContent className='flex flex-col items-center gap-2 p-4'>
				<img
					src={image}
					alt={pokemon.name}
					width={100}
					height={100}
					loading='lazy'
					className='w-24 h-24 object-contain drop-shadow-lg'
				/>
				<h2 className='text-white font-bold text-lg capitalize'>
					{pokemon.name}
				</h2>
				<p className='text-white/60 text-sm font-medium'>#{num}</p>
				<div role='list' className='flex gap-2 flex-wrap justify-center'>
					{types.map(type => (
						<Badge
							key={type}
							role='listitem'
							variant='outline'
							className='border-0 bg-gray-200/20'
						>
							{type}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
