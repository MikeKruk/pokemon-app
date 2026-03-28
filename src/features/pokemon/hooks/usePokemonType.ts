import { useQuery } from '@tanstack/react-query';
import { getAllTypes } from '../api';

export default function usePokemonType() {
	return useQuery({
		queryKey: ['pokemon-types'],
		queryFn: getAllTypes,
		staleTime: Infinity,
	});
}
