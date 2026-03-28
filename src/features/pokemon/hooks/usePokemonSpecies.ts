import { useQuery } from '@tanstack/react-query';
import { getPokemonSpecies } from '../api';

export default function usePokemonSpecies(name: string) {
	return useQuery({
		queryKey: ['pokemon-species', name],
		queryFn: () => getPokemonSpecies(name),
		enabled: !!name,
	});
}
