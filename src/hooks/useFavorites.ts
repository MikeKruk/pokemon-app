import { LOCAL_STORAGE_KEY } from '@/constants/constants';
import type { Pokemon } from '@/types/pokemon';
import { useState } from 'react';

function getFavorites(): Pokemon[] {
	try {
		const favoritesPokemon = localStorage.getItem(LOCAL_STORAGE_KEY);
		return favoritesPokemon ? JSON.parse(favoritesPokemon) : [];
	} catch (error) {
		console.error(error);
		return [];
	}
}

export default function useFavorites() {
	const [favorites, setFavorites] = useState<Pokemon[]>(getFavorites);

	function toggleFavorites(pokemon: Pokemon) {
		setFavorites(prev => {
			const exists = prev.some(p => p.id === pokemon.id);
			const update = exists
				? prev.filter(p => p.id !== pokemon.id)
				: [...prev, pokemon];

			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update));
			return update;
		});
	}

	function isFavorite(id: number) {
		return favorites.some(p => p.id === id);
	}

	return { favorites, toggleFavorites, isFavorite };
}
