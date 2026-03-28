import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delay = 500): T {
	const [debouncedValue, setDebouncedSearch] = useState<T>(value);
	useEffect(() => {
		const debounce = setTimeout(() => {
			setDebouncedSearch(value);
		}, delay);
		return () => clearTimeout(debounce);
	}, [value, delay]);

	return debouncedValue;
}
