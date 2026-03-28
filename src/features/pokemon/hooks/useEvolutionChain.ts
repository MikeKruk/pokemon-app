import { useQuery } from '@tanstack/react-query';
import { getEvolutionChain } from '../api';

export default function useEvolutionChain(url: string) {
	return useQuery({
		queryKey: ['pokemon-evolution', url],
		queryFn: () => getEvolutionChain(url),
		enabled: !!url,
	});
}
