import useFavorites from '@/hooks/useFavorites';
import type { Pokemon } from '@/types/pokemon';
import { useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';

export default function FavoritesList() {
	const { favorites, toggleFavorites, isFavorite } = useFavorites();
	const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
	return (
		<>
			{favorites.length === 0 ? (
				<p className='text-white/40 text-center mt-10'>No favorites yet</p>
			) : (
				<>
					<section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4'>
						{favorites.map(favorite => (
							<PokemonCard
								key={favorite.id}
								pokemon={favorite}
								onClick={setSelectedPokemon}
								isFavorite={isFavorite(favorite.id)}
								onToggleFavorite={toggleFavorites}
							/>
						))}
					</section>
					<PokemonModal
						pokemon={selectedPokemon}
						onClose={() => setSelectedPokemon(null)}
					/>
				</>
			)}
		</>
	);
}
