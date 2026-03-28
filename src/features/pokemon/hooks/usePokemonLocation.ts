import { useQuery } from '@tanstack/react-query';
import { getPokemonLocation } from '../api';

export default function usePokemonLocation(id: number) {
	return useQuery({
		queryKey: ['pokemon-location', id],
		queryFn: () => getPokemonLocation(id),
		enabled: !!id,
	});
}
