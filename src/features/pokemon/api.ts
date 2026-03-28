import { BASE_URL_API } from '../../constants/constants';

export async function getPokemonList(limit = 24, offset = 0) {
	const response = await fetch(
		`${BASE_URL_API}/pokemon/?limit=${limit}&offset=${offset}`
	);
	if (!response.ok) throw new Error('Failed to get pokemon list');
	return response.json();
}

export async function getPokemonByName(name: string) {
  const response = await fetch(
		`${BASE_URL_API}/pokemon/${name}`
	);
	if (!response.ok) throw new Error(`Failed to get pokemon ${name}`);
	return response.json();
}

export async function getAllTypes() {
	const response = await fetch(`${BASE_URL_API}/type`);
	if (!response.ok) throw new Error('Failed to get types');
	return response.json();
}

export async function getPokemonByType(type: string) {
	const response = await fetch(`${BASE_URL_API}/type/${type}`);
	if (!response.ok) throw new Error(`Failed to get pokemon by type: ${type}`);
	return response.json();
}
