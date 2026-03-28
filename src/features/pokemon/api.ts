import { BASE_URL_API, MAX_LIMIT } from '../../constants/constants';

export async function getPokemonList(limit = MAX_LIMIT, offset = 0) {
	const response = await fetch(
		`${BASE_URL_API}/pokemon/?limit=${limit}&offset=${offset}`
	);
	if (!response.ok) throw new Error('Failed to get pokemon list');
	return response.json();
}

export async function getPokemonByName(name: string) {
	const response = await fetch(`${BASE_URL_API}/pokemon/${name}`);
	if (!response.ok) throw new Error(`Failed to get pokemon ${name}`);
	return response.json();
}

export async function getAllTypes() {
	const response = await fetch(`${BASE_URL_API}/type`);
	if (!response.ok) throw new Error('Failed to get types');
	return response.json();
}

export async function getPokemonSpecies(name: string) {
	const response = await fetch(`${BASE_URL_API}/pokemon-species/${name}`);
	if (!response.ok) throw new Error(`Failed to get pokemon species ${name}`);
	return response.json();
}

export async function getEvolutionChain(url: string) {
	const response = await fetch(url);
	if (!response.ok) throw new Error('Failed to get evolution chain');
	return response.json();
}

export async function getPokemonLocation(id: number) {
	const response = await fetch(`${BASE_URL_API}/pokemon/${id}/encounters`);
	if (!response.ok) throw new Error(`Failed to get location ${id}`);
	return response.json();
}
