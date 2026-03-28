import { QueryClient } from '@tanstack/react-query';

export default function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000, // Data is considered current for 60 seconds
			},
		},
	});
}
