import Header from './components/layout/Header';
import PokemonCard from './components/layout/PokemonCard';
import usePokemonDetails from './features/pokemon/hooks/usePokemonDetails';
import usePokemonList from './features/pokemon/hooks/usePokemonList';
import type { PokemonListItem } from './types/pokemon';

function App() {
	const { data: pokemonList } = usePokemonList();

	const names = pokemonList?.pages.flatMap(page =>
		page.results.map((result: PokemonListItem) => result.name)
	);

	const { data: pokemon } = usePokemonDetails(names ?? []);
	console.log(pokemon);

	return (
		<div className='min-h-screen'>
			<Header />
			<main className='max-w-6xl mx-auto px-4 py-6'>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
					{pokemon?.map(pokemon => (
						<PokemonCard
							key={pokemon.id}
							pokemon={pokemon}
							onClick={() => {}}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
