import React from 'react';
import { ContextProvider } from './useContext';
import { Pokedex } from './components';
import './assets/style.sass';

export function App () {
	return (
		<ContextProvider>
			<Pokedex />
		</ContextProvider>
	);
};
