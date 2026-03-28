import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import PokemonCard from './components/layout/PokemonCard';
import SearchInput from './components/layout/SearchInput';
import TypeFilter from './components/layout/TypeFilter';
import usePokemonDetails from './features/pokemon/hooks/usePokemonDetails';
import usePokemonList from './features/pokemon/hooks/usePokemonList';
import usePokemonType from './features/pokemon/hooks/usePokemonType';
import type { PokemonListItem } from './types/pokemon';

function App() {
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [search, setSearch] = useState<string>('');
	const [debouncedSearch, setDebouncedSearch] = useState<string>('');
	const { data: pokemonList } = usePokemonList();
	const names = pokemonList?.pages.flatMap(page =>
		page.results.map((result: PokemonListItem) => result.name)
	);
	const { data: pokemon } = usePokemonDetails(names ?? []);
	const { data: typesList } = usePokemonType();

	const types = typesList?.results.map((type: { name: string }) => type.name);

	const filteredPokemon = (pokemon ?? []).filter(p => {
		const searchMatch = p.name
			.toLowerCase()
			.includes(debouncedSearch.toLowerCase());
		const typeMatch =
			selectedTypes.length === 0 ||
			p.types.some(type => selectedTypes.includes(type.type.name));
		return searchMatch && typeMatch;
	});

	function handelToggleType(type: string) {
		setSelectedTypes(prev =>
			prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
		);
	}

	useEffect(() => {
		const debounce = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);
		return () => clearTimeout(debounce);
	}, [search]);

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
			</main>
		</div>
	);
}

export default App;
