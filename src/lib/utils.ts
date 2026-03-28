import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { typeColors } from '../types/colors';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getCardBackground(types: string[]): string {
	const primaryColor = typeColors[types[0]] ?? '#A8A77A';
	const secondaryColor = typeColors[types[1]] ?? primaryColor;

	return types.length > 1
		? `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
		: primaryColor;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getEvolutions(evolutionInfo: any) {
	const names = [];
	let current = evolutionInfo?.chain;

	while (current) {
		names.push(current.species.name);
		current = current.evolves_to[0];
	}

	return names;
}
