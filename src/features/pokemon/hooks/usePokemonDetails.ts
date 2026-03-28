import type { Pokemon } from '@/types/pokemon';
import { useQuery } from '@tanstack/react-query';
import { getPokemonByName } from '../api';

export default function usePokemonDetails(names: string[]) {
	return useQuery<Pokemon[]>({
		queryKey: ['pokemon-details', names],
		queryFn: () => Promise.all(names.map(name => getPokemonByName(name))),
    enabled: names.length > 0
	});
}
