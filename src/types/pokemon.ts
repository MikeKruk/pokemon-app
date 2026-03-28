export interface PokemonType {
	slot: number;
	type: { name: string; url: string };
}
export interface Pokemon {
	id: number;
	name: string;
	types: PokemonType[];
	sprites: {
		front_default: string;
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string;
	results: PokemonListItem[];
}
