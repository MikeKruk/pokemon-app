import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import makeQueryClient from './lib/tanstackquery/query-client.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={makeQueryClient()}>
			<ThemeProvider attribute='class' defaultTheme='dark' forcedTheme='dark'>
				<App />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
);
