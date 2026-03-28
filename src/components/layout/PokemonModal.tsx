import useEvolutionChain from '@/features/pokemon/hooks/useEvolutionChain';
import usePokemonLocation from '@/features/pokemon/hooks/usePokemonLocation';
import usePokemonSpecies from '@/features/pokemon/hooks/usePokemonSpecies';
import { getEvolutions } from '@/lib/utils';
import type { Pokemon, PokemonLocation } from '@/types/pokemon';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';

interface PokemonModalProps {
	pokemon: Pokemon | null;
	onClose: () => void;
}

export default function PokemonModal({ pokemon, onClose }: PokemonModalProps) {
	const { data: pokemonSpecies, isLoading: isLoadingSpecies } =
		usePokemonSpecies(pokemon?.name ?? '');
	const { data: pokemonEvolution, isLoading: isLoadingEvolution } =
		useEvolutionChain(pokemonSpecies?.evolution_chain?.url ?? '');
	const { data: pokemonLocations, isLoading: isLoadingLocations } =
		usePokemonLocation(pokemon?.id ?? 0);
	const isLoading =
		isLoadingSpecies || isLoadingEvolution || isLoadingLocations;

	const sprites = pokemon
		? [
				pokemon?.sprites.front_default,
				pokemon?.sprites.other['official-artwork'].front_default,
		  ].filter(Boolean)
		: [];

	return (
		<Dialog open={!!pokemon} onOpenChange={onClose}>
			<DialogContent showCloseButton={false}>
				<DialogHeader className='items-center'>
					<DialogTitle className='capitalize'>
						{pokemon?.name ?? ''}
					</DialogTitle>
				</DialogHeader>

				<ScrollArea className='max-h-[60vh] pr-4'>
					{isLoading ? (
						<div className='space-y-4'>
							<div>
								<Skeleton className='h-4 w-16 mb-2' />
								<div className='flex gap-3'>
									<Skeleton className='h-20 w-20' />
									<Skeleton className='h-20 w-20' />
								</div>
							</div>

							<Separator />

							<div>
								<Skeleton className='h-4 w-20 mb-2' />
								<div className='flex gap-2'>
									<Skeleton className='h-6 w-20' />
									<Skeleton className='h-6 w-20' />
									<Skeleton className='h-6 w-20' />
								</div>
							</div>

							<Separator />

							<div>
								<Skeleton className='h-4 w-16 mb-2' />
								<div className='flex gap-2 flex-wrap'>
									<Skeleton className='h-6 w-24' />
									<Skeleton className='h-6 w-24' />
									<Skeleton className='h-6 w-24' />
								</div>
							</div>
						</div>
					) : (
						<div className='space-y-4'>
							<div>
								<p className='text-sm font-medium text-white/60 mb-2'>
									Sprites
								</p>
								<div className='flex gap-3'>
									{sprites.map((sprite, index) => (
										<img
											src={sprite}
											alt={pokemon?.name}
											key={index}
											loading='lazy'
											className='w-20 h-20 object-contain'
										/>
									))}
								</div>
							</div>

							<Separator />

							<div>
								<p className='text-sm font-medium text-white/60 mb-2'>
									Evolutions
								</p>
								<div className='flex gap-2 flex-wrap'>
									{getEvolutions(pokemonEvolution).map(evolution => (
										<Badge
											key={evolution}
											variant='outline'
											className='capitalize border-white/20'
										>
											{evolution}
										</Badge>
									))}
								</div>
							</div>

							<Separator />

							<div>
								<p className='text-sm font-medium text-white/60 mb-2'>
									Locations
								</p>
								{pokemonLocations?.length === 0 ? (
									<p className='text-white/40'>No locations found</p>
								) : (
									<div className='flex gap-2 flex-wrap'>
										{pokemonLocations?.map((location: PokemonLocation) => (
											<Badge
												key={location.location_area.name}
												variant='outline'
												className='capitalize border-white/20'
											>
												{location.location_area.name.replace(/-/g, ' ')}
											</Badge>
										))}
									</div>
								)}
							</div>
						</div>
					)}
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
