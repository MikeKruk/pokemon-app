import type { Pokemon } from '@/types/pokemon';

export default function filterPokemon(
	pokemon: Pokemon[],
	search: string,
	selectedTypes: string[]
) {
	return pokemon.filter(p => {
		const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
		const typeMatch =
			selectedTypes.length === 0 ||
			p.types.some(type => selectedTypes.includes(type.type.name));
		return searchMatch && typeMatch;
	});
}
