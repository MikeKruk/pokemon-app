export default function Header() {
	return (
		<header className='flex items-center justify-center p-4'>
			<div className='flex-1 flex items-center justify-center gap-2'>
				<img
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
					alt='Pokeball'
					width={32}
					height={32}
				/>
				<h1 className='text-xl font-bold bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
					Pokémon Explorer
				</h1>
			</div>
		</header>
	);
}
