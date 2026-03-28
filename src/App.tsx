import { useState } from 'react';
import Header from './components/layout/Header';
import LoadMoreBtn from './components/layout/LoadMoreBtn';
import PokemonCard from './components/layout/PokemonCard';
import SearchInput from './components/layout/SearchInput';
import TypeFilter from './components/layout/TypeFilter';
import usePokemonDetails from './features/pokemon/hooks/usePokemonDetails';
import usePokemonList from './features/pokemon/hooks/usePokemonList';
import usePokemonType from './features/pokemon/hooks/usePokemonType';
import useDebounce from './hooks/useDebounce';
import filterPokemon from './lib/filter-pokemon';
import type { PokemonListItem } from './types/pokemon';

function App() {
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [search, setSearch] = useState<string>('');
	const debouncedSearch = useDebounce(search, 500);

	const {
		data: pokemonList,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = usePokemonList();
	const names = pokemonList?.pages.flatMap(page =>
		page.results.map((result: PokemonListItem) => result.name)
	);
	const { data: pokemon } = usePokemonDetails(names ?? []);
	const { data: typesList } = usePokemonType();

	const types = typesList?.results.map((type: { name: string }) => type.name);

	const filteredPokemon = filterPokemon(
		pokemon ?? [],
		debouncedSearch,
		selectedTypes
	);

	function handelToggleType(type: string) {
		setSelectedTypes(prev =>
			prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
		);
	}

	return (
		<div className='min-h-screen'>
			<Header />
			<main className='max-w-6xl mx-auto px-4 py-6'>
				<SearchInput value={search} onChange={setSearch} />

				<TypeFilter
					types={types ?? []}
					selected={selectedTypes}
					onToggle={handelToggleType}
				/>

				<section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
					{filteredPokemon.map(pokemon => (
						<PokemonCard
							key={pokemon.id}
							pokemon={pokemon}
							onClick={() => {}}
						/>
					))}
				</section>

				{hasNextPage && (
					<LoadMoreBtn
						onClick={() => fetchNextPage()}
						isLoading={isFetchingNextPage}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
