import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonList } from '../api';

export function usePokemon() {
	return useInfiniteQuery({
		queryKey: ['pokemon-list'],
		queryFn: ({ pageParam }) => getPokemonList(24, pageParam),
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPage) =>
			lastPage.next ? allPage.length * 24 : undefined,
	});
}
