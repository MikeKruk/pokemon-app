import { useQuery } from '@tanstack/react-query';
import { getAllTypes } from '../api';

export function usePokemonType() {
	return useQuery({
		queryKey: ['pokemon-types'],
		queryFn: getAllTypes,
		staleTime: Infinity,
	});
}
